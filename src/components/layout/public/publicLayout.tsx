import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
   return (
      <div className="boxed-layout">
         <Outlet />
      </div>
   );
};
