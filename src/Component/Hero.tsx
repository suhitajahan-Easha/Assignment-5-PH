import hero from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="mx-auto max-w-350 flex justify-between items-center py-5">
      <div>
        <h1 className='text-[55px] font-extrabold  leading-7.5'>Build Your Ideal</h1>
        <h1 className='text-[55px] font-extrabold  leading-normal bg-linear-to-r from-orange-500 via-pink-600 to-purple-700 bg-clip-text text-transparent'>Development Stack</h1>
        <p className='text-[18px] w-200 my-5 text-gray-600'>
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className='mt-10 flex gap-3'>
          <button className='rounded-md border bg-linear-to-r from-orange-400 to-pink-500 text-white px-7 py-2'>Explore Technologies</button>
          <button className='rounded-md border border-gray-300 px-7 py-2 text-gray-600'>Learn More</button>
        </div>
      </div>
      <div>
        <img src={hero} alt="hero-png" className='p-7' />
      </div>
    </div>
  );
};

export default Hero;
