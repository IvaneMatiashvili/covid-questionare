import { useFormContext } from 'react-hook-form';

const Textarea = ({ id, name }) => {
  const { register } = useFormContext();
  return (
    <textarea
      rows='4'
      {...register(name)}
      id={id}
      className='block w-full mt-6
         text-dark-100 font-normal text-base font-arial bg-soft-brown w-[38rem] h-[11.5rem] outline-none border-2 border-border-gray pl-6 pt-4
         resize-none
        '
    ></textarea>
  );
};

export default Textarea;
