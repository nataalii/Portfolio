import { HashLink as Link } from 'react-router-hash-link';
import laptop from '/public/images/laptop.png';
const NavBar = () => {
  return (
    <nav className=' h-44 flex items-center justify-between sm:px-16 sm:pr-40 pl-8 fixed w-screen z-40 text-white text-2xl font-bold uppercase'>
      <div className=' flex items-center '>
        <img
          src={laptop}
          alt='Laptop'
          className=' w-24 drop-shadow-image-shadow'
        />
        <Link to='#home'>Portfolio</Link>
      </div>
      <div className='hidden lg:flex max-w-[600px] w-[100%] justify-between '>
        <Link smooth to='#home'>
          Home
        </Link>
        <Link smooth to='#skills'>
          Skills
        </Link>
        <Link smooth to='#projects'>
          Projects
        </Link>
        <Link smooth to='#contact'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
