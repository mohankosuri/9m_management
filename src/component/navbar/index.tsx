import Link from "next/link";
import { Button } from "@fluentui/react-components";
import { useEffect } from "react";
import { IMenuItem, IMenuProps } from "@9mindia/props/menu";

const Navbar = (props: IMenuProps) => {
  return (
    <>
      <div className="flex">
      <img
          src="images2.png"
          height={10}
          width={100}
          alt="logo"
          className="ml-[50px]"
        ></img>
        <ul className="flex navbar1">
          {props.menu.map((v: IMenuItem, i: number) => {
            return (
              <li key={i} >
                <Link className="Navitems"  href={v.link}> {v.name}</Link>
              </li>
           
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
