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
      <ListItemButton className="menu-item" selected={selected} onClick={onClick}>
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
