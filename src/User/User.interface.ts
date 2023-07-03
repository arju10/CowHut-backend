import { Document } from 'mongoose';


enum UserRole {
    Seller = 'seller',
    Buyer = 'buyer',
  }
  

interface IUser extends Document {
  password: string;
  role: UserRole;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
  createdAt: Date;
  updatedAt: Date;

}

export { IUser, UserRole };