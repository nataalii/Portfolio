/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import Profile from '/public/images/profile.png';
import Github from '/public/images/github.png';
import Linkedin from '/public/images/linkedin.png';
const Home = () => {
  return (
    <div
      className='bg-blue-background bg-fixed bg-no-repeat bg-cover bg-center min-h-screen relative flex flex-col lg:flex-row px-20 pt-[200px] lg:pt-0 justify-around items-center '
      id='home'
    >
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
        }}
        className=' text-white flex flex-col gap-4 max-w-[600px]'
      >
        <h1 className=' bg-gradient-to-rtext-[#72448a] from-[white] cursor-pointer opacity-70 p-3 rounded-md border-white border-[2px] font-medium text-xl max-w-[320px]'>
          Welcome to my Portfolio
        </h1>
        <h1 className=' text-[40px] font-semibold'>Welcome to my Portfolio</h1>

        <p className=' text-gray-500'>
          As an information technology student, with a strong foundation in web
          development and a passion for learning, I'm constantly seeking new
          opportunities to grow as a developer. Recently, I finished an
          internship as a Laravel/React developer, where I improved my skills
          and gained valuable experience to build web applications.
        </p>

        <div className=' flex items-center gap-3 mt-5'>
          <p className=' text-xl font-semibold'>Cheek out My: </p>
          <a href='https://github.com/nnataali' target='blank'>
            <img
              src={Github}
              alt='github'
              className=' w-16 hover:scale-105 transition-all duration-300'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/natalicharkviani/'
            target='blank'
          >
            <img
              src={Linkedin}
              alt='linkedin'
              className=' w-16 hover:scale-105 transition-all duration-300'
            />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: '+20%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
        }}
      >
        <img
          src={Profile}
          alt='Profile Image'
          className='drop-shadow-image-shadow animate-motion max-h-[550px]'
        />
      </motion.div>
    </div>
  );
};

export default Home;
