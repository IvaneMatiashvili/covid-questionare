import { useFormContext } from 'react-hook-form';

const InputRadioAndLabel = ({ id, value, labelContent, name }) => {
  const { register } = useFormContext();
  return (
    <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
      <input
        {...register(name, {
          required: 'გთხოვთ მონიშნეთ პასუხი',
        })}
        id={id}
        type='radio'
        value={value}
        className='w-[1.3rem] h-[1.3rem]'
      />
      <label
        htmlFor={id}
        className='ml-2 font-arial font-normal  text-[1.25rem] font-medium text-dark-100'
      >
        {labelContent}
      </label>
    </div>
  );
};

export default InputRadioAndLabel;
