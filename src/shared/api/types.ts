export interface FindAndCountResponse<T> {
  data: T[],
  totalCount: number;
}