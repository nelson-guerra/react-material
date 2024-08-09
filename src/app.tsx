import { Suspense } from 'react';
import { AppRoutes } from './routes/routes';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { configStore, persistor } from './store/configStore';
import { Loader } from './components/loader.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarContextProvider } from './context/snackbarContextProvider';

const queryClient = new QueryClient();

export const App = () => {
   return (
      <Suspense fallback={<Loader />}>
         <QueryClientProvider client={queryClient}>
            <Provider store={configStore}>
               <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
                  <SnackbarContextProvider>
                     <AppRoutes />
                  </SnackbarContextProvider>
               </PersistGate>
            </Provider>
         </QueryClientProvider>
      </Suspense>
   );
};
