import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <header className="header">
        <div className="logo">
          <a href="/">This Interior</a>
        </div>
        <div className="tog">
          <div className="toggle" onClick={handleClick}>
            <span>{click ? <MdClose /> : <MdMenu />}</span>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu_items">Home</li>
            <li className="menu_items">About</li>
            <li className="menu_items">Contact</li>
            <li className="menu_items">Services</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
