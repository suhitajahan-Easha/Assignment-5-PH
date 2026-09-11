import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="mx-auto max-w-300 mt-50">
      <div className=" flex justify-between  gap-10 w-287.5 ">
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
        <div>
          <h1 className="font-semibold mb-5 text-[16px] uppercase">Product</h1>
          <ul className="text-gray-500 text-12px">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-5 text-[16px] uppercase">Company</h1>
          <ul className="text-gray-500 text-12px">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-5 text-[16[x]] uppercase ">Legal</h1>
          <ul className="text-gray-500 text-12px">
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-12 mb-5 text-[12px] text-slate-500">
        <div> © 2026 Dev Stack. All rights reserved.</div>
        <div className="flex gap-7">
          <h1>Privacy</h1>
          <h1>Terms</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
