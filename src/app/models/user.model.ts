export interface User {
  _id : string;
  firstName:  string;
  lastName:  string;
  password? : string;
  email : string;
  role: string;
}
export interface createUserDTO extends Omit<User, '_id'> {
  password : string;

}
export interface updatePizzaDTO extends Partial<createUserDTO> {
}
