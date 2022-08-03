import React from 'react';


const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {/* {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })} */}
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src='https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/css3.png?alt=media&token=61db674f-e26b-4c57-8b8f-e4bd543410d4' alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/git.png?alt=media&token=484246a6-097c-4d51-af62-4b61ca26ae11" alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/html5.png?alt=media&token=a5becc38-031a-4479-8a22-46fff3ee92ba" alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/js.png?alt=media&token=f7c56729-2d03-44f9-99c7-5ba76fd29688" alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/nodejs.png?alt=media&token=8175905c-b44f-4fed-b6e1-6c0cbce8cfd3" alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/reactjs.png?alt=media&token=8dfb785c-464e-43d5-980a-86fe3cf4ace3" alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className='lg:h-20' src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde424ee15.8061979615260584681513.png?alt=media&token=f48f4f80-8dde-42fc-9c00-8d2783e0d0b4" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;