import { IAdmin } from './admin.interface';
import { IEmployee } from './employee.interface';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  birthdate: Date;
  gender: string;
  user_details?: IAdmin | IEmployee;
  role_id: number;
  created_at: Date;
  updated_at: Date;
}
