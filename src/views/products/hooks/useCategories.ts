import { useQuery } from '@tanstack/react-query';
import { categoriesService } from '../../../services/categories.service';

export const useCategories = <T>() => {
   const { data, isLoading, isSuccess, isFetching } = useQuery<T[]>({
      queryKey: ['categories'],
      queryFn: ({ signal }) => categoriesService.getAllCategories({ signal }),
      select: data => data.reverse(),
   });

   return { data, isLoading, isSuccess, isFetching };
};
