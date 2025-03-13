// types/index.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  description: string;
}

export interface Rating {
  value: number;
  count: number;
}

export interface UserCredentials {
  username: string;
  password: string;
}
