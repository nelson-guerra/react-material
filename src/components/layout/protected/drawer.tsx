import { useMediaQuery, useTheme, Drawer as MuiDrawer } from '@mui/material';
import { useDrawerContext } from '../../../context/hooks/useDrawerContext';
import { Menu } from './menu/menu';

export const Drawer = () => {
   const { isOpened, toggleIsOpened } = useDrawerContext();
   const theme = useTheme();
   const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

   return (
      <MuiDrawer
         PaperProps={{
            sx: {
               display: 'flex',
               flexDirection: 'column',
               maxWidth: '100%',
               position: 'static',
               scrollbarWidth: 'none',
               width: isOpened ? '220px' : theme.spacing(0),
               transition: isOpened
                  ? theme.transitions.create('width', {
                       easing: theme.transitions.easing.sharp,
                       duration: theme.transitions.duration.enteringScreen,
                    })
                  : theme.transitions.create('width', {
                       easing: theme.transitions.easing.sharp,
                       duration: theme.transitions.duration.leavingScreen,
                    }),
            },
         }}
         variant={isLargeScreen ? 'permanent' : 'temporary'}
         open={!isLargeScreen && isOpened ? true : false}
         onClose={() => toggleIsOpened(!isOpened)}>
         <Menu />
      </MuiDrawer>
   );
};
