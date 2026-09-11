import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav className=" mx-auto max-w-300 px-4 sm:px-6 lg:px-0 flex justify-between items-center py-5 text-gray-600  h-25">
        <IoMenu className="sm:block md:hidden text-[30px]"/>
        <img src={logo} alt="Navbar-logo" />
        <ul className="hidden md:flex justify-between gap-6 items-center">
          <li className="text-gradient-middle">Home</li>
          <li>Technologies</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button>Sign In</button>
          <button className=" bg-gradient-middle text-white rounded-4xl w-23 h-10 ml-4">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
