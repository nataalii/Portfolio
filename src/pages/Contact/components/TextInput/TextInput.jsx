import { useFormContext } from 'react-hook-form';
import { ValidationConfig } from '@/config';

const TextInput = (props) => {
  const { register, formState } = useFormContext();
  return (
    <div
      className={`flex flex-col gap-1 ${
        props.field === 'Message' ? 'w-full ' : 'lg:w-[47%]'
      }`}
    >
      <label htmlFor={props.field} className=' text-white'>
        {props.field}
      </label>
      {props.field === 'Message' && (
        <textarea
          name={props.field}
          placeholder={props.placeholder}
          rows='7'
          className={`bg-[#c9d3ea] text-gray-500 outline-none px-4 py-2 rounded-lg border-2 border-transparent focus:border-red-200`}
          {...register(props.field, ValidationConfig[props.field])}
        />
      )}
      {props.field !== 'Message' && (
        <input
          {...register(props.field, ValidationConfig[props.field])}
          type='text'
          id={props.field}
          className={`bg-[#c9d3ea] text-gray-500 outline-none px-4 py-2 rounded-lg border-2 border-transparent focus:border-red-200`}
          placeholder={props.placeholder}
        />
      )}

      <p className=' text-red-200 h-1'>
        {formState.errors[props.field]?.message}
      </p>
    </div>
  );
};
export default TextInput;
