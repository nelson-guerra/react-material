import { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ErrorSvg } from './icons/errorSvg';
import { SuccessSvg } from './icons/successSvg';
import { SvgContainer } from './svgContainer';

type ResultImageProps = {
   customImage?: ReactNode;
   status?: 'error' | 'success';
};

const ResultImage = ({ customImage, status }: ResultImageProps) => {
   let image = customImage;

   if (!image) {
      if (status === 'error') {
         image = <ErrorSvg />;
      } else if (status === 'success') {
         image = <SuccessSvg />;
      }
   }

   return image ? <Box marginBottom={3}>{image}</Box> : null;
};

type ResultProps = {
   extra?: ReactNode;
   image?: ReactNode;
   maxWidth?: 'xs' | 'sm';
   status?: 'error' | 'success';
   subTitle?: string;
   title: string;
};

export const Result = ({ extra, image, maxWidth = 'xs', status, subTitle, title }: ResultProps) => {
   return (
      <Container maxWidth={maxWidth}>
         <Box sx={{ textAlign: 'center', p: 0 }}>
            <SvgContainer>
               <ResultImage customImage={image} status={status} />
            </SvgContainer>
            <Typography gutterBottom variant="h6">
               {title}
            </Typography>
            {subTitle && <Typography variant="body2">{subTitle}</Typography>}
            {extra && <Box sx={{ mt: 4, textAlign: 'center' }}>{extra}</Box>}
         </Box>
      </Container>
   );
};
