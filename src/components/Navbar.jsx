import { useState } from "react";
import burguerMenu from "../assets/icon-hamburger.svg";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };
  console.log(menuClicked);

  return (
    <nav className="">
      <ul
        className={`${menuClicked ? 'flex' : 'hidden'} bg-white py-[39px] w-[329px] h-[305px] absolute z-10 left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[''] after:absolute after:top-[-20px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-r-white after:border-b-white text-Very-dark-grayish-blue text-xl

        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px]  sm:h-[24px] sm:mx-0  sm:relative sm:text-White 
        
        md:w-[500px] md:justify-between`}>
        <li className="cursor-pointer hover:text-black transition-all">About</li>
        <li className="cursor-pointer hover:text-black transition-all">Services</li>
        <li className="cursor-pointer hover:text-black transition-all">Projects</li>
        <li className="cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue sm:bg-white sm:uppercase sm:hover:text-white sm:hover:bg-opacity-25 sm:transition-all">
          Contact
        </li>
      </ul>
      <div className="cursor-pointer sm:hidden transition-all" onClick={handleClick}>
        <img src={burguerMenu} alt="menu hamburgesa" />
      </div>
    </nav>
  );
};

export default Navbar;
