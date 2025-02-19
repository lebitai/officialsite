import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Stripe from "stripe";
import { insertOrderSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is required");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const CONSULTING_PRICE = 2990; // $29.90 in cents

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const orderData = insertOrderSchema.parse(req.body);
      
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Web3/GenAI Basic Setup Consulting",
                description: "1.5 hour consulting session",
              },
              unit_amount: CONSULTING_PRICE,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/consulting`,
        customer_email: orderData.email,
      });

      const order = await storage.createOrder({
        ...orderData,
        amount: CONSULTING_PRICE,
        stripeSessionId: session.id,
      });

      res.json({ url: session.url });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid order data" });
        return;
      }
      res.status(500).json({ message: "Failed to create checkout session" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      await storage.createContact(contactData);
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid contact data" });
        return;
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
