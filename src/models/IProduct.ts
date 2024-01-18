// interface IRating {
//   5: number;
//   4: number;
//   3: number;
//   2: number;
//   1: number;
//   totalRewiews: number;
// }

interface IProductSpecification {
  name: string;
  description: string;
}

interface IProductImage {
  id: number;
  url: string;
}

export interface IProduct {
  id: number;
  name: string;
  specifications?: IProductSpecification[];
  rating: number;
  description?: string;
  price: number;
  gallery: IProductImage[];
  previewImage: string;
  quantityInStock: number;
}
