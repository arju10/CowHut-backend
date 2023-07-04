interface IAdmin {
    phoneNumber: string;
    role: 'admin';
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    address: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export default IAdmin;
  