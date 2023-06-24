import { Document } from 'mongoose';

interface IUser extends Document {
    password: string;
    role: 'seller' | 'buyer';
    name: {
    firstName: string;
    lastName: string;
  };
    phoneNumber: string;
  address: string;
  budget: number;
  income: number;

}

export default IUser;