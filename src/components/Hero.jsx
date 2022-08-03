import React from 'react';

// import woman image

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center '>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hola, me llamo Agustin 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Full Stack <br /> Web Debeloper.
            </h1>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Mira mi Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;