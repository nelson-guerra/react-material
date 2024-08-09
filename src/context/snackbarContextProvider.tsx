import { createContext, useState, ReactNode } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

export type SnackbarContextType = {
   error: (newMessage: string) => void;
   success: (newMessage: string) => void;
};

export const SnackbarContext = createContext({} as SnackbarContextType);
type AlertColor = 'success' | 'info' | 'warning' | 'error';

export const SnackbarContextProvider = ({ children }: { children: ReactNode }) => {
   const [open, setOpen] = useState(false);
   const [message, setMessage] = useState('');
   const [title, setTitle] = useState('');
   const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

   const handleClose = (event: React.SyntheticEvent | React.MouseEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };

   const error = (newMessage: string) => {
      setTitle('Error');
      setMessage(newMessage);
      setSeverity('error');
      setOpen(true);
   };

   const success = (newMessage: string) => {
      setTitle('Success');
      setMessage(newMessage);
      setSeverity('success');
      setOpen(true);
   };

   return (
      <SnackbarContext.Provider value={{ error, success }}>
         {children}
         <Snackbar
            key={message}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
               <AlertTitle>{title}</AlertTitle>
               {message}
            </Alert>
         </Snackbar>
      </SnackbarContext.Provider>
   );
};
