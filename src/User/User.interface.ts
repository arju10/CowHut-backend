import { Document } from 'mongoose';


enum UserRole {
    Seller = 'seller',
    Buyer = 'buyer',
  }
  

interface IUser extends Document {
    phoneNumber: string;
    role: UserRole;
    password: string;
    name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  budget: number;
  income: number;

}

export { IUser, UserRole };