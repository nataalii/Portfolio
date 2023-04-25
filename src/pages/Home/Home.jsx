/* eslint-disable jsx-a11y/img-redundant-alt */
import Profile from '/public/images/profile.png';
export const Home = () => {
  return (
    <div
      className='bg-blue-background bg-fixed bg-no-repeat bg-cover bg-center h-screen relative flex justify-around items-center '
      id='home'
    >
      <div className=' text-white flex flex-col gap-4 max-w-[600px]'>
        <h3 className=' bg-gradient-to-rtext-[#72448a] from-[white] cursor-pointer opacity-70 p-3 rounded-md border-white border-[2px] font-medium text-xl max-w-[320px]'>
          Welcome to my Portfolio
        </h3>
        <h1 className=' text-[40px] font-semibold'>
          Hi! I'm Natali, Full Stack Developer
        </h1>
        <p className=' text-gray-500'>
          As an information technology student, with a strong foundation in web
          development and a passion for learning, I'm constantly seeking new
          opportunities to grow as a developer. Recently, I finished an
          internship as a Laravel/React developer, where I improved my skills
          and gained valuable experience to build web applications.
        </p>
      </div>
      <div>
        <img
          src={Profile}
          alt='Profile Image'
          className='drop-shadow-image-shadow animate-motion'
        />
      </div>
    </div>
  );
};

export default Home;
