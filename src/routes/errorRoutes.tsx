import { Route, Routes } from 'react-router-dom';
import { ErrorsLayout } from '../components/layout/errorsLayout';
import { Error404 } from '../views/errors/error404';

export const ErrorRoutes = () => {
   return (
      <Routes>
         <Route element={<ErrorsLayout />}>
            <Route path="404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
         </Route>
      </Routes>
   );
};
