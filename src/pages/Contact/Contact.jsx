import { motion } from 'framer-motion';
import { FormProvider } from 'react-hook-form';
import ContactInfo from './components/ContactInfo/ContactInfo';
import TextInput from './components/TextInput/TextInput';
import 'react-toastify/dist/ReactToastify.min.css';
import useContact from './useContact';
const Contact = () => {
  const { methods, onSubmit, form } = useContact();
  return (
    <div className='relative  min-h-screen '>
      <div
        className='absolute w-full top-0 bottom-0 bg-linear-gradient z-10 '
        id='contact'
      />
      <div className=' bg-[#a9bcdd] min-h-screen relative flex flex-col items-center justify-center '>
        <img
          src='/public/images/contact.webp'
          alt='contact'
          className='w-full h-screen  absolute top-0 object-cover'
        />
        <FormProvider {...methods}>
          <motion.form
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
            }}
            ref={form}
            className='z-30 max-w-[1100px] w-[80%] lg:w-[40%] flex flex-col gap-7 items-center'
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <h1 className=' text-[40px]  text-white'>Contact me</h1>
            <div className='flex lg:flex-row flex-col gap-5 justify-between mt-5 w-full'>
              <TextInput field='Name' placeholder='Natalie' />
              <TextInput field='Email' placeholder='Email' />
            </div>
            <TextInput field='Message' placeholder='Your Message' />
            <button className=' w-full bg-none border-2 border-white p-2 rounded-lg text-white text-xl font-semibold'>
              Send
            </button>
            <ContactInfo />
          </motion.form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Contact;
