export interface ICategory {
  id: number;
  name: string;
  icon?: string;
  parentCategory?: ICategory;
  subCategories?: ICategory[];
}