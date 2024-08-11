import { useLocation } from 'react-router-dom';
import { List } from '@mui/material';
import { MenuItem } from './menuItem';
import { menuList } from './constants';

export const Menu = () => {
   const { pathname } = useLocation();

   if (!menuList.length) return null;

   return (
      <div className="menu">
         <List component="nav" sx={{ px: 2 }}>
            {menuList.map(({ literal, route, Icon }) => (
               <MenuItem Icon={Icon} literal={literal} route={route} key={route} selected={pathname === route} />
            ))}
         </List>
      </div>
   );
};
