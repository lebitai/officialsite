import { pgTable, text, serial, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultingOrders = pgTable("consulting_orders", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  amount: numeric("amount").notNull(),
  stripeSessionId: text("stripe_session_id").notNull(),
  status: text("status").notNull().default("pending"),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertOrderSchema = createInsertSchema(consultingOrders).omit({
  id: true,
  stripeSessionId: true,
  status: true,
});

export const insertContactSchema = createInsertSchema(contactMessages).omit({
  id: true,
});

export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof consultingOrders.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactMessages.$inferSelect;
