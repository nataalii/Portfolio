import { motion } from 'framer-motion';

const SkillItem = (props) => {
  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
      }}
    >
      <div
        className='  w-40 h-40 bg-[#c4d0e8] hover:bg-[#becce5] 
         drop-shadow-xl  hover:drop-shadow-2xl hover:scale-105 transition-all duration-500
        rounded-md cursor-pointer flex flex-col 
         items-center justify-center'
      >
        <img
          src={`/images/${props.image}.png`}
          alt={props.title}
          className=' w-20'
        />
        <p className='mt-3 text-xl font-semibold'>{props.title}</p>
      </div>
    </motion.div>
  );
};

export default SkillItem;
