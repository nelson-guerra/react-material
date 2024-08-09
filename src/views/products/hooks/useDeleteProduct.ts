import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../../../services/products.service';

export const useDeleteProduct = <T>() => {
   const queryClient = useQueryClient();

   const { isPending, mutateAsync } = useMutation({
      mutationFn: (params: T) => productService.deleteProduct<T>(params),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ['products'] });
      },
   });

   return { isDeleting: isPending, deleteProduct: mutateAsync };
};
