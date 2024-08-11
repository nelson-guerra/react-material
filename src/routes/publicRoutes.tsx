import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from '../components/layout/public';
import { LoginPage } from '../views/loginPage';

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
