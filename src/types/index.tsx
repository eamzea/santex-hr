export interface ProductInterface {
  id: string
  description: string;
  featuredAsset: {
    source: string;
  };
  variants: {
    price: number;
  }[];
}
