export interface ProductInterface {
  description: string;
  featuredAsset: {
    source: string;
  };
  variants: {
    price: number;
  }[];
}
