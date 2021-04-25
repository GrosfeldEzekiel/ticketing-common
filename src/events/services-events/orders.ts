import { subjects } from "../subjects";
import { OrderStatus } from "../types/order-status";

export interface OrderCreatedEvent {
  subject: subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    ticket: {
      id: string;
      price: number;
    };
    userId: string;
    expiresAt: string;
  };
}

export interface OrderCancelled {
  subject: subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
