import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateLayout } from '../components/layout/private/privateLayout';
//import { DashboardPage } from '../views/dashboard';
import { ProductsPage } from '../views/products/products';
import { InventoryPage } from '../views/inventory';
import { CustomersPage } from '../views/customers';

export const PrivateRoutes = () => {
   //const ProductView = lazy(() => import('../views/products/products'));

   return (
      <Routes>
         <Route element={<PrivateLayout />}>
            {/* Redirect to Dashboard after success login */}
            <Route path="auth/*" element={<Navigate to="/products" />} />
            {/* Pages */}
            <Route index element={<Navigate replace to="products" />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="customers" element={<CustomersPage />} />
            {/* Page Not Found */}
            <Route path="*" element={<Navigate to="/error/404" />} />
         </Route>
      </Routes>
   );
};
