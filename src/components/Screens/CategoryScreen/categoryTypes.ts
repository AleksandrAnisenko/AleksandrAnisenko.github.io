import { Filter, FilterBaseResponse } from '../../../shared/types/filtertypes';

export interface Category {
  id: string;
  name: string;
  photo?: string;
}

export interface CategoriesRequest extends Omit<Filter, 'pagination' | 'sorting'> {
  pagination?: string;
  sorting?: string;
}

export interface CategoriesResponse extends FilterBaseResponse {
  data: Category[];
}

export interface CategoryParams {
  name: string;
  photo?: string;
}
