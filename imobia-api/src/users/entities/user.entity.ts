export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  birthDate?: Date;
  isAdmin: boolean = false;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
