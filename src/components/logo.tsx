import Box, { BoxProps } from '@mui/material/Box';
//import { ReactComponent as LogoSvg } from '../assets/logo.svg';

type LogoProps = {
   colored?: boolean;
   size?: number;
} & BoxProps;

export const Logo = ({ colored = false, size = 40, ...boxProps }: LogoProps) => {
   return (
      <Box {...boxProps}>
         <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 24 24" version="1.1">
            <path d="m 6,7 6,10" />
            <path d="M 18,7 V 7" />
         </svg>
      </Box>
   );
};
