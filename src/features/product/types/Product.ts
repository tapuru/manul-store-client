import { ProductImage } from "./ProductImage";
import { ProductSpecification } from "./ProductSpecification";

export interface Product {
  id: number;
  name: string;
  specifications?: ProductSpecification[];
  rating: number;
  description?: string;
  price: number;
  gallery: ProductImage[];
  previewImage: string;
  quantityInStock: number;
}
