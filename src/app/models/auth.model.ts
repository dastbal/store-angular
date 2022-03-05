import { User } from "./user.model";

export interface Auth{
  access_token : string;
  user: User;

}
