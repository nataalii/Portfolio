const SkillItem = (props) => {
  return (
    <div
      className='  w-40 h-40 bg-[#c4d0e8] hover:bg-[#becce5] 
         drop-shadow-xl hover:scale-105	 hover:drop-shadow-2xl 
         transition-all duration-500  rounded-md cursor-pointer flex flex-col 
         items-center justify-center'
    >
      <img
        src={`/public/images/${props.image}.png`}
        alt={props.title}
        className=' w-20'
      />
      <p className='mt-3 text-xl font-semibold'>{props.title}</p>
    </div>
  );
};

export default SkillItem;
