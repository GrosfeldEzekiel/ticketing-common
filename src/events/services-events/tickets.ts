import { subjects } from "../subjects";

export interface TicketCreatedEvent {
  subject: subjects.TicketCreated;
  data: {
    version: number
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}

export interface TicketUpdatedEvent {
  subject: subjects.TicketUpdated;
  data: {
    version: number
    id: string;
    title: string;
    price: number;
    userId: string;
    orderId?: string
  };
}