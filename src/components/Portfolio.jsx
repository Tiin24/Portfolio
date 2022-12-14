import React from 'react';
import Project from './Projects';

// import components

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
            En esta seccion podras encontrar mis ultimos proyectos e interactuar con ellos
          </p>
        </div>
        <Project/>
      </div>
    </section>
  );
};

export default Portfolio;