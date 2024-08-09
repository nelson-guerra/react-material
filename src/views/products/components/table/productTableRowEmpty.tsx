import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const ProductTableRowEmpty = () => {
   return (
      <TableRow tabIndex={-1} sx={{ '& td': { bgcolor: 'background.paper', border: 0, borderRadius: '16px' } }}>
         <TableCell align="center" colSpan={5} sx={{ py: 1 }}>
            No records to show
         </TableCell>
      </TableRow>
   );
};
