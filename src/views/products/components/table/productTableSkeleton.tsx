import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ProductTableHead } from './productTableHead';

const CellSkeleton = () => {
   return (
      <TableCell sx={{ px: 1, py: 0 }}>
         <Skeleton animation="wave" height={60} sx={{ borderRadius: '10px' }} />
      </TableCell>
   );
};

const RowSkeleton = () => {
   return (
      <TableRow tabIndex={-1} sx={{ '& td': { bgcolor: '#ECEFF1', border: 0 } }}>
         <CellSkeleton />
         <CellSkeleton />
         <CellSkeleton />
         <CellSkeleton />
         <CellSkeleton />
      </TableRow>
   );
};

export const ProductTableSkeleton = () => {
   return (
      <>
         <TableContainer>
            <Table
               aria-labelledby="tableTitle"
               sx={{
                  mt: '1rem',
                  minWidth: 500,
                  borderCollapse: 'separate',
                  borderSpacing: '0 0 1rem 0',
               }}>
               <ProductTableHead />
               <TableBody>
                  <RowSkeleton />
                  <RowSkeleton />
                  <RowSkeleton />
                  <RowSkeleton />
                  <RowSkeleton />
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
};
