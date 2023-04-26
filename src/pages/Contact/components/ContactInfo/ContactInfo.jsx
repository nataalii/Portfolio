import Phone from '/public/images/phone.png';
import Gmail from '/public/images/gmail.png';
const ContactInfo = () => {
  return (
    <div className='hidden w-full sm:flex flex-row  text-white font-bold justify-around -mt-3'>
      <div className=' flex items-center gap-3'>
        <img src={Phone} alt='phone' className=' w-8' />
        <span>(+995) 599-11-20-03</span>
      </div>
      <div className=' flex items-center gap-3 '>
        <img src={Gmail} alt='gmail' className=' w-8' />
        <span>natacharkviani1@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
