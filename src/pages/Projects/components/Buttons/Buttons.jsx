import Next from '@/components/Icons/Next';
import Previous from '@/components/Icons/Previous';
const Buttons = (props) => {
  return (
    <>
      <button
        type='button'
        className='absolute top-0 -left-14 md:left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={props.prevSlide}
      >
        <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <Previous />
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 -right-14 md:right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={props.nextSlide}
      >
        <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <Next />
        </span>
      </button>
    </>
  );
};

export default Buttons;
