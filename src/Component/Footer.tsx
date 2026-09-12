import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="mx-auto mt-30 max-w-300 px-4 sm:px-6 lg:mt-50 lg:px-0">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <img src={logo} alt="logo" className="mx-auto mb-6 md:mx-0" />
          <p className="mb-6 text-[14px] leading-6 text-gray-500">
            Curated tools,technologies, and resources for developers building <br className="hidden md:block" /> modern software.
          </p>
          <ul className="mx-auto flex w-fit items-center gap-3 text-sm md:mx-0">
            <li className=" flex items-center gap-3 after:text-gray-400 after:content-['•'] md:after:hidden">Github</li>
            <li className=" flex items-center gap-3 after:text-gray-400 after:content-['•'] md:after:hidden">Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="mb-5 text-[16px] font-semibold uppercase">Product</h1>
          <ul className="text-[12px] leading-7 text-gray-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="mb-5 text-[16px] font-semibold uppercase">Company</h1>
          <ul className="text-[12px] leading-7 text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <h1 className="mb-5 text-[16px] font-semibold uppercase">Legal</h1>
          <ul className="text-[12px] leading-7 text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 mb-10 flex max-w-full flex-row items-center justify-center gap-4 px-2 text-center text-[11px] text-slate-500 sm:max-w-[85%] sm:gap-6 md:max-w-none md:justify-between md:px-0 md:text-[12px] md:mb-12">
        <div className="whitespace-nowrap">
          © 2026 Dev Stack. All rights reserved.
        </div>
        <div className="flex shrink-0 gap-4 sm:gap-7">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
