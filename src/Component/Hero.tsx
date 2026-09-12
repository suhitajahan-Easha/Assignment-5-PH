import hero from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-10 px-4 py-10 sm:px-6 lg:px-0 lg:flex-row sm:gap-0">
      <div className="w-full sm:w-auto">
        <h1 className="text-[40px] font-extrabold leading-tight sm:text-[48px] md:text-[55px] md:leading-7.5">
          Build Your Ideal
        </h1>
        <h1 className="bg-linear-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-[40px] font-extrabold leading-tight text-transparent sm:text-[48px] md:text-[55px] md:leading-normal">
          Development Stack
        </h1>
        <p className="my-5 w-full text-[14px] leading-6 text-gray-600 sm:text-[16px] md:w-200 md:text-[18px]">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden md:block" />
          compare them side by side, and put together the stack that fits your
          <br className="hidden md:block" />
          next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
          <button className="rounded-md border bg-linear-to-r from-gradient-start to-gradient-middle px-5 py-2 text-sm text-white sm:px-7 sm:text-base">
            Explore Technologies
          </button>
          <button className="rounded-md border border-gray-300 px-5 py-2 text-sm text-gray-600 sm:px-7 sm:text-base">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center md:w-auto md:justify-end">
        <img
          src={hero}
          alt="hero-png"
          className="w-full max-w-sm md:-ml-5 md:max-w-none"
        />
      </div>
    </div>
  );
};

export default Hero;
