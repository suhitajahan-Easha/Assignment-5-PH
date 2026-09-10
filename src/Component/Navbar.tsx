import logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div>
      <nav className=" mx-auto max-w-300 flex justify-between items-center py-5 text-gray-600">
        <img src={logo} alt="Navbar-logo" />
        <ul className="flex justify-between gap-6 items-center">
          <li className="text-pink-600">Home</li>
          <li>Technologies</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button>Sign In</button>
          <button className=" bg-pink-600 text-white rounded-4xl w-23 h-10 ml-3">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
