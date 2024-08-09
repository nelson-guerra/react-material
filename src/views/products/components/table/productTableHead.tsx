import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { tableColumns } from './tableColumns';

export const ProductTableHead = () => {
   return (
      <TableHead>
         <TableRow sx={{ '& th': { border: 0, py: 1 } }}>
            {tableColumns.map(tableColumn => (
               <TableCell key={tableColumn.id} align={tableColumn.align} width={tableColumn.width} sx={{ py: 0 }}>
                  <Typography component="div">{tableColumn.label}</Typography>
               </TableCell>
            ))}
            <TableCell align="center" width={'8%'} sx={{ px: 0 }}>
               <Typography component="div">Actions</Typography>
            </TableCell>
         </TableRow>
      </TableHead>
   );
};
