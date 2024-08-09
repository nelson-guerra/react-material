import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { ProductTableHead } from './productTableHead';
import { ProductTableRow } from './productTableRow';
import { ProductTableRowEmpty } from './productTableRowEmpty';
import { Product } from '../../types';

interface ProductTableProps {
   processing: boolean;
   onDelete: (productId: string) => void;
   onEdit: (product: Product) => void;
   products?: Product[];
}

export const ProductTable = ({ processing, onDelete, onEdit, products = [] }: ProductTableProps) => {
   const [page, setPage] = useState(0);
   const [rowsPerPage, setRowsPerPage] = useState(5);

   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <>
         <TableContainer>
            <Table
               aria-labelledby="tableTitle"
               sx={{
                  minWidth: 500,
                  borderCollapse: 'separate',
                  borderSpacing: '0 1rem',
               }}>
               <ProductTableHead />
               <TableBody>
                  {products.length > 0 ? (
                     products
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(product => (
                           <ProductTableRow
                              key={product.id}
                              onDelete={onDelete}
                              onEdit={onEdit}
                              processing={processing}
                              product={product}
                           />
                        ))
                  ) : (
                     <ProductTableRowEmpty />
                  )}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton={true}
            showLastButton={true}
            disabled={true}
         />
      </>
   );
};
