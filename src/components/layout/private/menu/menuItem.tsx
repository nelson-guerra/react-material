import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuItemType } from './types';

type MenuItemProps = MenuItemType & {
   selected?: boolean;
   onClick?: () => void;
};

export const MenuItem: FC<MenuItemProps> = ({ route, literal, Icon, selected, onClick }) => {
   const link = (
      <ListItemButton
         selected={selected}
         sx={{
            '&.Mui-selected': {
               backgroundColor: '#ECEFF1',
               color: 'inherit',
               borderRadius: '16px',
            },
            '&:hover': {
               backgroundColor: '#F5F5F5',
               color: 'inherit',
               borderRadius: '16px',
            },
         }}
         onClick={onClick}>
         <ListItemIcon
            sx={[
               { minWidth: 'auto' },
               theme => ({
                  paddingRight: theme.spacing(2),
               }),
            ]}>
            <Icon sx={{ color: 'secondary.dark' }} />
         </ListItemIcon>
         <ListItemText primary={literal} />
      </ListItemButton>
   );

   return route ? <Link to={route}>{link}</Link> : link;
};
