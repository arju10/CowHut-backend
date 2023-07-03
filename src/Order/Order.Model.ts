import { Schema, model } from 'mongoose';
import { OrderDocument } from './Order.Interface';

// Define the order schema
const orderSchema = new Schema<OrderDocument>({
  cow: { type: Schema.Types.ObjectId, ref: 'Cow', required: true }, // Reference to the Cow model
  buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
});


const OrderModel = model<OrderDocument>('Order', orderSchema);

export default OrderModel;
