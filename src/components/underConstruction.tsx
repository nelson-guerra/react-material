import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Result } from './result';
import { ConstructionSvg } from './icons/constructionSvg';

export const UnderConstruction = () => {
   return (
      <Result
         extra={
            <Button color="secondary" component={RouterLink} to={`/`} variant="contained">
               {'Back to home'}
            </Button>
         }
         image={<ConstructionSvg />}
         maxWidth="sm"
         subTitle={'We are actively working on this page.'}
         title={'Under constructions!'}
      />
   );
};
