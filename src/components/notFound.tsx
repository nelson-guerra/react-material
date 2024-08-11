import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Result } from './result';
import { Error404Svg } from './icons/404Svg';

export const NotFound = () => {
   return (
      <Result
         extra={
            <Button color="secondary" component={RouterLink} to={`/`} variant="contained">
               {'Back to home'}
            </Button>
         }
         image={<Error404Svg />}
         maxWidth="sm"
         subTitle={`Sorry, we couldn't find the page you're looking for.`}
         title={'Oops!'}
      />
   );
};
