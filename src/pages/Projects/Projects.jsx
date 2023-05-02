import { ProjectsConfig } from '@/config';
import Project from './components/Project/Project';
import { motion } from 'framer-motion';
import Buttons from './components/Buttons/Buttons';
import useProject from './components/Project/useProject';

const Projects = () => {
  const { prevSlide, nextSlide, goToSlide, currentIndex } = useProject();
  return (
    <div
      className=' min-h-screen bg-[#c9d3ea] bg-fixed  flex flex-col gap-16 items-center justify-center py-20 text-white '
      id='projects'
    >
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
        }}
        className=' text-xl md:text-3xl flex flex-col items-center gap-2'
      >
        <h1>My Recent Projects</h1>
        <hr className=' w-72 md:w-96 h-[2px] bg-white' />
      </motion.div>
      <div className='relative w-[60%] text-center'>
        <Project
          key={currentIndex}
          title={ProjectsConfig[currentIndex].title}
          image={ProjectsConfig[currentIndex].image}
          description={ProjectsConfig[currentIndex].description}
          links={ProjectsConfig[currentIndex].links}
        />
        <div className='flex mt-6 justify-center py-2'>
          {ProjectsConfig.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <div className=' w-2 h-2 bg-slate-200 rounded-full ml-4' />
            </div>
          ))}
        </div>
        <Buttons prevSlide={prevSlide} nextSlide={nextSlide} />
      </div>
    </div>
  );
};

export default Projects;
