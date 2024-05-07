import logo from "../assets/logo.svg";
import iconDown from "../assets/dropdown.svg";
import iconUp from "../assets/dropup.svg";
import { useState } from "react";
import ellipsis from "../assets/vertical_ellipsis.svg"; 

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
      <header className="flex justify-between dark:text-white items-center">
        {/* Left Side */}

        <div className="flex items-center space-x-2  md:space-x-4">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">
            Kanban
          </h3>

          <div className="flex items-center">
            <h3 className=" truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans  ">
              Board name
            </h3>
            <img
              src={openDropdown ? iconUp : iconDown}
              alt="dropdown icon"
              className="w-8 ml-2 md:hidden"
              onClick={() => setOpenDropdown((state) => !state)}
            />
          </div>
        </div>
        {/* Right Side */}

        <div className="flex space-x-4 item-center md:space-x-6">
          <button className="button">+ Add New Task</button>
        </div>
        <button className="button py-1 px-3 md:hidden">+</button>
        <img src={ellipsis} alt="ellipsis" className="cursor-pointer h-6"/>
      </header>
    </div>
  );
}
export default Header;
