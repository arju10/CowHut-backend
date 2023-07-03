import { Document, Schema } from 'mongoose';


interface Order {
  cow: Schema.Types.ObjectId; // Reference to the cow _id
  buyer: Schema.Types.ObjectId; // Reference to the buyer _id
}


interface OrderDocument extends Order, Document {}

export { Order, OrderDocument };
