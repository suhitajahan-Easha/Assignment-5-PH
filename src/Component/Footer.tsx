import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="mx-auto max-w-300 mt-50 px-4 sm:px-6 lg:px-0">
      <div className=" flex justify-between  xl:gap-10 xl:w-287.5 ">
        <div className="">
          <img src={logo} alt="logo" className="mb-6" />
          <p className="text-gray-500 text-[14px] mb-6">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <ul className="grid grid-cols-3 items-start w-60">
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="font-semibold mb-5 text-[16px] uppercase">Product</h1>
          <ul className="text-gray-500 text-12px">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="font-semibold mb-5 text-[16px] uppercase">Company</h1>
          <ul className="text-gray-500 text-12px">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="font-semibold mb-5  uppercase ">Legal</h1>
          <ul className="text-gray-500 text-12px">
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-12 mb-5 text-[12px] text-slate-500 max-w-[85%] mx-auto lg:max-w-none">
        <div> © 2026 Dev Stack. All rights reserved.</div>
        <div className="flex gap-7">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
