export interface Specification {
  type: string;
  text: string;
}

export interface LinkOperadora {
  name: string;
  url: string;
}

export interface Product {
  _id: string;
  name: string;
  normalPrice: string;
  price: string;
  urlBuy: string;
  urlInfo?: string;
  imageUrl: string;
  info?: string;
  specifications: Specification[];
  linkOperadoras: LinkOperadora[];
}

export interface ProductCardProps {
  product: Product;
  hideButton?: boolean;
}

export interface ProductComparisonProps {
  products: Product[];
} 