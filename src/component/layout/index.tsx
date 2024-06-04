import { PropsWithChildren } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import menuData from "@9mindia/static-data/menu.json";
import Arrow from "../Arrow/Arrow";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div >
        
        
        
        <div >
          <Navbar menu={menuData.menu} />
        </div>
        <div >{children}</div>
        <div >
          <footer><Footer /></footer>
          
        </div>
        <Arrow/>
        </div>
      
    </>
  );
};

export default Layout;



