import { createContext, useContext, useState } from "react";
import { ContextProp } from "../../types/AuthContext";

export interface IMenuProvider {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

const MenuContext = createContext<IMenuProvider>({} as IMenuProvider);

export const MenuProvider = ({ children }: ContextProp) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
