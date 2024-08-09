import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './privateRoutes';
import { useAppSelector } from '../store/hooks';
import { PublicRoutes } from './publicRoutes';
import { ErrorRoutes } from './errorRoutes';

export const AppRoutes: FC = () => {
   const isAuthorized = useAppSelector(({ auth }) => auth.user);

   return (
      <Routes>
         <Route path="error/*" element={<ErrorRoutes />} />
         {isAuthorized ? (
            <>
               <Route path="/*" element={<PrivateRoutes />} />
            </>
         ) : (
            <>
               <Route path="auth/*" element={<PublicRoutes />} />
               <Route path="*" element={<Navigate to="/auth" />} />
            </>
         )}
      </Routes>
   );
};
