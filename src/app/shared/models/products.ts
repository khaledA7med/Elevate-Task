export interface products {
  id: number;
  title: string;
  price: number;
  rating: rating;
  image: string; // URL of the product image
}

export interface rating {
  count: number;
  rate: number;
}
