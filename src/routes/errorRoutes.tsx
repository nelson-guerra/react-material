import { Route, Routes } from 'react-router-dom';
import { ErrorLayout } from '../components/layout/error';
import { NotFound } from '../components/notFound';

export const ErrorRoutes = () => {
   return (
      <Routes>
         <Route element={<ErrorLayout />}>
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
   );
};
