import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../../../services/products.service';
import { Product } from '../types';

export const useUpdateProduct = <T>() => {
   const queryClient = useQueryClient();

   const { isPending, mutateAsync } = useMutation({
      mutationFn: (params: T) => productService.updateProduct<T, string>(params, (params as Product).id),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ['products'] });
      },
   });

   return { isUpdating: isPending, updateProduct: mutateAsync };
};
