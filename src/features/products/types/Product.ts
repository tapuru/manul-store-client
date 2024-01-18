// interface IRating {
//   5: number;
//   4: number;
//   3: number;
//   2: number;
//   1: number;
//   totalRewiews: number;
// }

interface ProductSpecification {
  name: string;
  description: string;
}

interface ProductImage {
  id: number;
  url: string;
}

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
