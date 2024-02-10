export type Image = {
  _key: string;
  url: string;
};

export type Car = {
  _id: string;
  year: number;
  carModel: string;
  image: Image[];
  isBooked: boolean;
  price: number;
};
