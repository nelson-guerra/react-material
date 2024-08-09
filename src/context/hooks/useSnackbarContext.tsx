import { useContext } from 'react';
import { SnackbarContext, SnackbarContextType } from '../snackbarContextProvider';

export const useSnackbarContext = () => {
   return useContext(SnackbarContext) as SnackbarContextType;
};
