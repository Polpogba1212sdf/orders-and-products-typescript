export interface Order {
  id: number;
  title: string;
  date: Date;
  description: string;
  products: Product[];
}

export interface Guarantee {
  start: Date;
  end: Date;
}

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: Date;
}

export interface Option {
  value: string;
  name: string;
}

export interface InputFileEvent extends Event {
  target: HTMLInputElement;
}

export interface MyState {
  orders: Order[];
  products: Product[];
}
