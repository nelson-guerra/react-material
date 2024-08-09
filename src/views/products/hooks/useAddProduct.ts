import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../../../services/products.service';

export const useAddProduct = <T>() => {
   const queryClient = useQueryClient();

   const { isPending, mutateAsync } = useMutation({
      mutationFn: (params: T) => productService.addProduct<T>(params),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ['products'] });
      },
   });

   return { isAdding: isPending, addProduct: mutateAsync };
};
