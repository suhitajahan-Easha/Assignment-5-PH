import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex h-20 max-w-300 items-center justify-between px-3 py-5 text-gray-600 sm:px-6 lg:px-0 min-[1200px]:h-25 min-[1200px]:px-0">
        <IoMenu className="text-[28px] md:hidden" />
        <img
          src={logo}
          alt="Navbar-logo"
          className="w-24 sm:w-32 min-[1200px]:w-auto"
        />
        <ul className="hidden items-center gap-4 md:flex lg:gap-6">
          <li className="text-gradient-middle">Home</li>
          <li>Technologies</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm sm:text-base">Sign In</button>
          <button className="h-9 rounded-4xl bg-gradient-middle px-4 text-sm text-white sm:h-10 sm:w-23 sm:px-0 sm:text-base">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
