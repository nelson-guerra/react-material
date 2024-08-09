import { Toolbar } from '@mui/material';
import { Header } from './header';
import { Drawer } from './drawer';
import { Main } from './main';
import { DrawerContextProvider } from '../../../context/drawerContextProvider';

export const PrivateLayout = () => (
   <DrawerContextProvider>
      <div className="boxed-layout">
         <Header />
         <Toolbar />
         <div className="drawer-container">
            <Drawer />
            <Main />
         </div>
      </div>
   </DrawerContextProvider>
);
