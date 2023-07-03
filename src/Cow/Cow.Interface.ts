import { Schema } from "mongoose";

export interface Cow {
    name: string;
    age: number;
    price: number;
    location: 'Dhaka' | 'Chattogram' | 'Barishal' | 'Rajshahi' | 'Sylhet' | 'Comilla' | 'Rangpur' | 'Mymensingh';
    breed: 'Brahman' | 'Nellore' | 'Sahiwal' | 'Gir' | 'Indigenous' | 'Tharparkar' | 'Kankrej';
    weight: number;
    label: 'for sale' | 'sold out';
    category: 'Dairy' | 'Beef' | 'DualPurpose';
    seller: Schema.Types.ObjectId;
  }

