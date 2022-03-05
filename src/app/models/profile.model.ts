import { User } from "./user.model";

export interface Profile {
  sub : string;
  role:  'admin' | 'role';
  user : User;
}
