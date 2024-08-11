import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedLayout } from '../components/layout/protected';
//import { DashboardPage } from '../views/dashboardPage';
import { ProductsPage } from '../views/products/productsPage';
import { InventoryPage } from '../views/inventoryPage';
import { CustomersPage } from '../views/customersPage';

export const ProtectedRoutes = () => {
   //const ProductView = lazy(() => import('../views/products/products'));

   return (
      <Routes>
         <Route element={<ProtectedLayout />}>
            {/* Redirect to ProductsPage after success login */}
            <Route path="auth/*" element={<Navigate to="/products" />} />
            {/* Pages */}
            <Route index element={<Navigate replace to="products" />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="customers" element={<CustomersPage />} />
            {/* Page Not Found */}
            <Route path="*" element={<Navigate to="/error/not-found" />} />
         </Route>
      </Routes>
   );
};
