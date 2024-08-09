import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../components/layout/public/publicLayout';
import { LoginPage } from '../views/login';

export const PublicRoutes = () => {
   return (
      <Routes>
         <Route element={<PublicLayout />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="login" element={<LoginPage />} />
         </Route>
      </Routes>
   );
};
