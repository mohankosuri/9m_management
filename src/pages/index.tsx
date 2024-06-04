import Image from "next/image";
import { Inter } from "next/font/google";
import { SitePage } from "@9mindia/component/layout/type";
import HomeComponent from "@9mindia/component/home";
import ProductComponent from "@9mindia/component/product";


const HomePage: SitePage = () => {
  return (
    <>
      <div>
        <HomeComponent />
        {/* <ProductComponent/> */}
        
        
      </div>
    </>
  );
};

export default HomePage;
HomePage.Layout = "Default";
