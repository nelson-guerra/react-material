import { useContext } from 'react';
import { DrawerContext, DrawerContextType } from '../drawerContextProvider';

export const useDrawerContext = () => {
   return useContext(DrawerContext) as DrawerContextType;
};
