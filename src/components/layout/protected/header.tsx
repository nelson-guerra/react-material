import { AppBar, Toolbar, IconButton, Typography, useTheme } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actionLogout } from '../../../store/auth/authSlice';
import { useDrawerContext } from '../../../context/hooks/useDrawerContext';

export const Header = () => {
   const { isOpened, toggleIsOpened } = useDrawerContext();
   const theme = useTheme();
   const dispatch = useAppDispatch();

   const user = useAppSelector(({ auth }) => auth.user);

   const handleLogout = () => {
      dispatch(actionLogout());
   };

   return (
      <AppBar sx={{ backgroundColor: 'primary.dark', color: 'secondary.contrastText' }}>
         <Toolbar>
            <IconButton color="inherit" onClick={() => toggleIsOpened(!isOpened)} sx={{ padding: theme.spacing(1) }}>
               {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" sx={{ margin: 'auto' }}>
               {user?.email}
            </Typography>
            <IconButton color="inherit" onClick={() => handleLogout()}>
               <ExitToAppIcon />
            </IconButton>
         </Toolbar>
      </AppBar>
   );
};
