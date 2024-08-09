import { useState } from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Product } from '../../types';

interface ProductTableRowProps {
   onDelete: (productId: string) => void;
   onEdit: (product: Product) => void;
   processing: boolean;
   product: Product;
}

export const ProductTableRow = ({ onDelete, onEdit, processing, product }: ProductTableRowProps) => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const openActions = Boolean(anchorEl);

   const handleOpenMenuActions = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleCloseMenuActions = () => {
      setAnchorEl(null);
   };

   const handleDelete = () => {
      handleCloseMenuActions();
      onDelete(product.id);
   };

   const handleEdit = () => {
      handleCloseMenuActions();
      onEdit(product);
   };

   return (
      <TableRow tabIndex={-1} key={product.id} sx={{ '& td': { bgcolor: 'background.paper', border: 0 } }}>
         <TableCell align="center" sx={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}>
            {product.id}
         </TableCell>
         <TableCell>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Box>
                  <Typography component="div">{product.title}</Typography>
                  <Typography color="textSecondary" variant="body2">
                     {product.description}
                  </Typography>
               </Box>
            </Box>
         </TableCell>
         <TableCell align="center">{product.price}</TableCell>
         <TableCell align="center">{product.category.name}</TableCell>
         <TableCell align="right" sx={{ borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}>
            <IconButton
               id="row-menu-button"
               aria-label="actions"
               aria-controls="row-menu"
               aria-haspopup="true"
               aria-expanded={openActions ? 'true' : 'false'}
               disabled={processing}
               onClick={handleOpenMenuActions}>
               <MoreVertIcon />
            </IconButton>
            <Menu
               id="row-menu"
               anchorEl={anchorEl}
               aria-labelledby="row-menu-button"
               open={openActions}
               onClose={handleCloseMenuActions}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}>
               <MenuItem onClick={handleEdit}>
                  <ListItemIcon>
                     <EditIcon />
                  </ListItemIcon>{' '}
                  {'Edit'}
               </MenuItem>
               <MenuItem onClick={handleDelete}>
                  <ListItemIcon>
                     <DeleteIcon />
                  </ListItemIcon>{' '}
                  {'Delete'}
               </MenuItem>
            </Menu>
         </TableCell>
      </TableRow>
   );
};
