import { Admin } from './admin.interface';
import { Employee } from './employee.interface';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  birthdate: Date;
  gender: string;
  userDetails?: Admin | Employee;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}
