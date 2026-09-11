import hero from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-0 md:flex justify-between items-center py-10">
      <div>
        <h1 className='text-[55px] font-extrabold  leading-7.5'>Build Your Ideal</h1>
        <h1 className='text-[55px] font-extrabold  leading-normal bg-linear-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent'>Development Stack</h1>
        <p className='text-[18px] w-200 my-5 text-gray-600'>
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className='mt-10 flex gap-3'>
          <button className='rounded-md border bg-linear-to-r from-gradient-start to-gradient-middle text-white px-7 py-2'>Explore Technologies</button>
          <button className='rounded-md border border-gray-300 px-7 py-2 text-gray-600'>Learn More</button>
        </div>
      </div>
      <div>
        <img src={hero} alt="hero-png" className='-ml-5' />
      </div>
    </div>
  );
};

export default Hero;
