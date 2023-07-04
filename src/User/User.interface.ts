export interface User {
    // _id?: string;
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
    createdAt?: Date;
    updatedAt?: Date;
  }
  
