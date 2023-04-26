const ContactInfo = () => {
  return (
    <div className='hidden w-full sm:flex flex-row  text-white font-bold justify-around -mt-3'>
      <div className=' flex items-center gap-3'>
        <img src='/public/images/phone.png' alt='phone' className=' w-8' />
        <span>(+995) 599-11-20-03</span>
      </div>
      <div className=' flex items-center gap-3 '>
        <img src='/public/images/gmail.png' alt='phone' className=' w-8' />
        <span>natacharkviani1@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
