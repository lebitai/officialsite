import { consultingOrders, contactMessages, type Order, type InsertOrder, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  createOrder(order: InsertOrder & { stripeSessionId: string; amount: number }): Promise<Order>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private orders: Map<number, Order>;
  private contacts: Map<number, Contact>;
  private currentOrderId: number;
  private currentContactId: number;

  constructor() {
    this.orders = new Map();
    this.contacts = new Map();
    this.currentOrderId = 1;
    this.currentContactId = 1;
  }

  async createOrder(insertOrder: InsertOrder & { stripeSessionId: string; amount: number }): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = { ...insertOrder, id, status: "pending" };
    this.orders.set(id, order);
    return order;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { ...insertContact, id };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();