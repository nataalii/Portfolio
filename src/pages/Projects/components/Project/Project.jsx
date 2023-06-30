import { useState } from 'react';
import { motion } from 'framer-motion';

const Project = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ x: '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 70,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=' flex flex-col'
    >
      <h1 className='text-2xl mb-3'>{props.title}</h1>
      <div className='relative h-56 md:h-[400px] m-auto md:w-[70%] w-[95%]'>
        <img
          src={props.image}
          className='absolute w-full h-[95%] sm:h-[90%] rounded-lg object-cover'
          alt='project img'
        />
        {isHovered && (
          <div className='absolute w-full h-[95%] sm:h-[90%]  rounded-lg z-10 bg-blue-900  backdrop-blur-sm bg-opacity-20  flex flex-col gap-5 items-center justify-center  '>
            <div className=' flex gap-3 items-center'>
              <p className=' text-2xl font-semibold'>Github</p>
              <img
                src={'/images/github.png'}
                alt='github'
                className=' h-8 object-cover'
              />
            </div>
            {props.links.map((link) => {
              return (
                <a
                  href={link.url}
                  className=' sm:py-3 p-2 sm:px-8 bg-white text-gray-500 rounded-lg drop-shadow-xl'
                  target='_blank'
                  rel='noreferrer'
                >
                  {link.content}
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className='w-[80%] m-auto text-gray-500'>
        <p>{props.description}</p>
      </div>
    </motion.div>
  );
};

export default Project;
