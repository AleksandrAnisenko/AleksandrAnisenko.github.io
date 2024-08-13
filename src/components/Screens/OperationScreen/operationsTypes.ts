import { Filter, FilterBaseResponse, SortingField, SortingType } from '../../../shared/types/filtertypes';

export type OperationType = {
  name: string;
  desc?: string;
  amount: number;
  date: string;
  type: 'Profit' | 'Cost';
  categoryId: string;
};

export interface Operation extends Omit<OperationType, 'categoryId'> {
  id: string;
  createdAt: string;
  updatedAt: string;
  commandId: string;
  category: Category | null;
}

export interface OperationsSchema {
  operations: Operation[] | null;
  isLoading: boolean;
  error: string;
  hasMore: boolean;
  sortingType: SortingType;
  sortingField: SortingField;
  currentPage: number;
  pageSize: number;
}

export interface Category {
  id: string;
  name: string;
}
export interface ProductParams {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
}

export interface OperationsFilters extends Filter {
  categoryIds?: string[];
}

export interface OperationsResponse extends FilterBaseResponse {
  data: Operation[];
}

export interface OperationsRequest extends Omit<OperationsFilters, 'pagination' | 'sorting' | 'ids'> {
  pagination?: string;
  sorting?: string;
  ids?: string;
}
