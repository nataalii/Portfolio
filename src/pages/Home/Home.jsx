/* eslint-disable jsx-a11y/img-redundant-alt */
import Profile from '/public/images/profile.png';
export const Home = () => {
  return (
    <div
      className='bg-blue-background bg-fixed bg-no-repeat bg-cover bg-center h-screen relative flex justify-around items-center '
      id='home'
    >
      <div className=' text-white flex flex-col gap-4 max-w-[600px]'>
        <h3 className=' bg-gradient-to-r from-[#520979] to-[#00c2ff] opacity-70 p-3 rounded-md border-white border-[2px] font-medium text-3xl max-w-[350px]'>
          Welcome to my Portfolio
        </h3>
        <h1 className=' text-[60px] font-semibold'>
          Hi! I'm Natali, Full Stack Developer
        </h1>
        <p className=' text-black'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
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
