import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useContact = () => {
  const methods = useForm({ mode: 'all' });
  const form = useRef();

  const notify = () =>
    toast.success('Your Email Sent Successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const onSubmit = () => {
    emailjs
      .sendForm(
        'service_ixnvneo',
        'template_a6h1bw7',
        form.current,
        'hoflHM4kM7RF-a3RZ'
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return { methods, onSubmit, form };
};

export default useContact;
