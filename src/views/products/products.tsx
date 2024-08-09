import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';

import { useProducts } from './hooks/useProducts';
import { useAddProduct } from './hooks/useAddProduct';
import { useUpdateProduct } from './hooks/useUpdateProduct';
import { useDeleteProduct } from './hooks/useDeleteProduct';
import { useSnackbarContext } from '../../context/hooks/useSnackbarContext';
import { ProductTable } from './components/table/productTable';
import { ConfirmDialog } from '../../components/confirmDialog';
import { ProductDialog } from './components/productDialog';
import { ProductTableSkeleton } from './components/table/productTableSkeleton';
import { Product } from './types';

export const ProductsPage = () => {
   const { data, isLoading, isFetching } = useProducts<Product>();
   const { addProduct, isAdding } = useAddProduct<Product>();
   const { updateProduct, isUpdating } = useUpdateProduct<Product>();
   const { deleteProduct, isDeleting } = useDeleteProduct<string>();

   const snackbar = useSnackbarContext();

   const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState<boolean>(false);
   const [openProductDialog, setOpenProductDialog] = useState<boolean>(false);
   const [productDeleted, setProductDeleted] = useState<string>('');
   const [productUpdated, setProductUpdated] = useState<Product | undefined>(undefined);

   const processing = isFetching || isDeleting || isAdding || isUpdating;

   const handleAddUser = async (product: Product) => {
      addProduct(product)
         .then(() => {
            snackbar.success(`${product.title} has been added!`);
            setOpenProductDialog(false);
         })
         .catch(() => {
            snackbar.error('Error unexpected');
         });
   };

   const handleUpdateUser = async (product: Product) => {
      updateProduct(product)
         .then(() => {
            snackbar.success(`${product.title} has been updated!`);
            setOpenProductDialog(false);
         })
         .catch(() => {
            snackbar.error('Error unexpected');
         });
   };

   const handleDeleteUsers = async () => {
      deleteProduct(productDeleted)
         .then(() => {
            snackbar.success('Product have been deleted!');
            setProductDeleted('');
            setOpenConfirmDeleteDialog(false);
         })
         .catch(() => {
            snackbar.error('Error unexpected');
         });
   };

   const handleCloseConfirmDeleteDialog = () => {
      setOpenConfirmDeleteDialog(false);
   };

   const handleOpenConfirmDeleteDialog = (productId: string) => {
      setProductDeleted(productId);
      setOpenConfirmDeleteDialog(true);
   };

   const handleCloseProductDialog = () => {
      setProductUpdated(undefined);
      setOpenProductDialog(false);
   };

   const handleOpenProductDialog = (product?: Product) => {
      setProductUpdated(product);
      setOpenProductDialog(true);
   };

   return (
      <>
         <Container>
            <AppBar
               position="sticky"
               elevation={0}
               variant="outlined"
               sx={{ backgroundColor: '#ECEFF1', color: 'inherit', borderColor: 'transparent' }}>
               <Box sx={{ display: 'flex', px: 1 }}>
                  <Typography variant="h5" component="div" sx={{ flexGrow: 1, py: 1 }}>
                     Products
                  </Typography>
                  <Fab size="medium" color="primary" aria-label="add" onClick={() => handleOpenProductDialog()}>
                     <AddIcon />
                  </Fab>
               </Box>
            </AppBar>
            {isLoading ? (
               <ProductTableSkeleton />
            ) : (
               <ProductTable
                  processing={processing}
                  onDelete={handleOpenConfirmDeleteDialog}
                  onEdit={handleOpenProductDialog}
                  products={data}
               />
            )}
         </Container>

         <ConfirmDialog
            description={'Are you sure you want to delete this product?'}
            pending={processing}
            onClose={handleCloseConfirmDeleteDialog}
            onConfirm={handleDeleteUsers}
            open={openConfirmDeleteDialog}
            title={'Confirmation'}
         />

         {openProductDialog && (
            <ProductDialog
               onAdd={handleAddUser}
               onClose={handleCloseProductDialog}
               onUpdate={handleUpdateUser}
               open={openProductDialog}
               processing={processing}
               product={productUpdated}
            />
         )}
      </>
   );
};
