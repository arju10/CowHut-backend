import mongoose, { Document, Schema } from 'mongoose';

import { Cow } from './Cow.Interface';

export interface CowDocument extends Cow, Document { }

const cowSchema = new Schema<CowDocument>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, enum: ['Dhaka', 'Chattogram', 'Barishal', 'Rajshahi', 'Sylhet', 'Comilla', 'Rangpur', 'Mymensingh'], required: true },
    breed: { type: String, enum: ['Brahman', 'Nellore', 'Sahiwal', 'Gir', 'Indigenous', 'Tharparkar', 'Kankrej'], required: true },
    weight: { type: Number, required: true },
    label: { type: String, enum: ['for sale', 'sold out'], default: 'for sale' },
    category: { type: String, enum: ['Dairy', 'Beef', 'DualPurpose'], required: true },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const CowModel = mongoose.model<CowDocument>('Cow', cowSchema);

export default CowModel;
