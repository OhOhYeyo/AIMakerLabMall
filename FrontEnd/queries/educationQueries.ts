import { useQuery } from '@tanstack/react-query';
import { getEducationList } from '../services/productService';

export function useEducationListQuery() {
  return useQuery({
    queryKey: ['education'],
    queryFn: getEducationList,
  });
}
