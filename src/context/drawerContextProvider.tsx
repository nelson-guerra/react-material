import { createContext, useState, useMemo, ReactNode } from 'react';

export type DrawerContextType = {
   isOpened: boolean;
   toggleIsOpened: (value: boolean) => void;
};

export const DrawerContext = createContext({} as DrawerContextType);

export const DrawerContextProvider = ({ children }: { children: ReactNode }) => {
   const [isOpened, toggleIsOpened] = useState(true);

   const value = useMemo(
      () => ({
         isOpened,
         toggleIsOpened,
      }),
      [isOpened],
   );

   return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
};
