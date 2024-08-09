import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Result } from './result';
import { ConstructionIcon } from './icons/constructionIcon';

export const UnderConstruction = () => {
   return (
      <Result
         extra={
            <Button color="secondary" component={RouterLink} to={`/`} variant="contained">
               {'Back to home'}
            </Button>
         }
         image={<ConstructionIcon />}
         maxWidth="sm"
         subTitle={'We are actively working on this page.'}
         title={'Under constructions!'}
      />
   );
};
