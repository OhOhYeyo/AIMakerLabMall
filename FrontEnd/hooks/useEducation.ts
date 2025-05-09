import { useQuery } from '@tanstack/react-query';
import { getEducationList } from '../services/productService';

export function useEducation() {
  return useQuery({
    queryKey: ['education'],
    queryFn: getEducationList,
  });
}
