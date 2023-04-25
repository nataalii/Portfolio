import { HashLink as Link } from 'react-router-hash-link';
import laptop from '/public/images/laptop.png';
const NavBar = () => {
  return (
    <nav className='h-44 flex items-center justify-between px-10 pr-44 fixed w-screen z-20 text-white'>
      <div>
        <Link to='#home'>
          <img
            src={laptop}
            alt='Laptop'
            className=' w-52 drop-shadow-image-shadow'
          />
        </Link>
      </div>
      <div className=' flex w-[700px] justify-between text-2xl font-bold uppercase'>
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
