import Header from "../Header";
import Menu from "../Menu";
import { createContext } from "react";

export const MenuContext = createContext();

function Layout() {
  const menus = ["Trang chu", "Tin tuc", "Gioi thieu", "Lien he"];

  return (
    <>
      <MenuContext.Provider value={menus}>
        <Header></Header>
      </MenuContext.Provider>

      <div>Main</div>
      <div>Footer</div>
    </>
  );
}

export default Layout;
