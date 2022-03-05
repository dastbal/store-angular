export interface Pizza {
  _id : string;
  name:  string;
  description : string;
  image : string;
  price : number;
}
export interface createPizzaDTO extends Omit<Pizza, '_id'> {
  created : string;
}
export interface updatePizzaDTO extends Partial<createPizzaDTO> {
}
