import { Toolbar } from '@mui/material';
import { Header } from './header';
import { Drawer } from './drawer';
import { Main } from './main';
import { DrawerContextProvider } from '../../../context/drawerContextProvider';

export const ProtectedLayout = () => {
   return (
      <div className="protected-layout">
         <DrawerContextProvider>
            <Header />
            <Toolbar />
            <div className="container">
               <Drawer />
               <Main />
            </div>
         </DrawerContextProvider>
      </div>
   );
};
