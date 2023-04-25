import { HashLink as Link } from 'react-router-hash-link';
import laptop from '/public/images/laptop.png';
const NavBar = () => {
  return (
    <nav className='h-44 flex items-center justify-between px-16 pr-40 fixed w-screen z-20 text-white text-2xl font-bold uppercase'>
      <div className=' flex items-center '>
        <img
          src={laptop}
          alt='Laptop'
          className=' w-24 drop-shadow-image-shadow'
        />{' '}
        <Link to='#home'>Portfolio</Link>
      </div>
      <div className=' flex w-[600px] justify-between '>
        <Link smooth to='#home'>
          Home
        </Link>
        <Link smooth to='#skills'>
          Skills
        </Link>
        <Link smooth to='#project'>
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
