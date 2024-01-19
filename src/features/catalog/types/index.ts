export interface Category {
  id: number;
  name: string;
  icon?: string;
  parentCategory?: Category;
  subCategories?: Category[];
}

export interface Brand {
  id: number;
  name: string;
  icon: string;
}