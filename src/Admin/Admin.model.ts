import { Schema, model, Document } from 'mongoose';
import IAdmin from './Admin.interface';

const AdminSchema = new Schema<IAdmin>({
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin',
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const AdminModel = model<IAdmin & Document>('Admin', AdminSchema);

export default AdminModel;
