import { Dashboard, People, AttachMoney } from '@mui/icons-material';
import { MenuItemType } from '../types';

export const menuList: MenuItemType[] = [
   {
      route: '/products',
      literal: 'Products',
      Icon: Dashboard,
   },
   {
      route: '/customers',
      literal: 'Customers',
      Icon: People,
   },
   {
      route: '/inventory',
      literal: 'Inventory',
      Icon: AttachMoney,
   },
];
