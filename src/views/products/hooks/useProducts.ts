import { useQuery } from '@tanstack/react-query';
import { productService } from '../../../services/products.service';

export const useProducts = <T>() => {
   const { data, isLoading, isSuccess, isFetching } = useQuery<T[]>({
      queryKey: ['products'],
      queryFn: ({ signal }) => productService.getAllProducts({ signal }),
      select: data => data.reverse(),
   });

   return { data, isLoading, isSuccess, isFetching };
};
