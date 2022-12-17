import DatePicker from 'react-datepicker';
import MaskedInput from 'react-text-mask';

const TestAndAntibodies = ({
  controller: Controller,
  register,
  watch,
  control,
}) => {
  return (
    <>
      <label
        htmlFor='AntibodiesQuantity'
        className='block text-[1.4rem] font-bold text-dark-100 mt-[2.5rem]'
      >
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*
      </label>

      <Controller
        id='TestDate'
        control={control}
        name='TestDate'
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
            placeholderText={'რიცხვი'}
            dateFormat='dd/MM/yyyy'
            className='placeholder-gray-500 placeholder-4 placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[1.5rem] ml-[1.25rem] border-2 border-border-gray pl-[24px]'
            onChange={onChange}
            onBlur={onBlur}
            selected={watch('TestDate')}
            ref-setter={register('TestDate')}
          />
        )}
      />
      <input
        {...register('AntibodiesQuantity')}
        type='number'
        id='AntibodiesQuantity'
        placeholder='ანტისხეულების რაოდენობა'
        className='placeholder-gray-500 placeholder-4 placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[1.5rem] ml-[1.25rem] border-2 border-border-gray pl-[24px]'
      />
    </>
  );
};

export default TestAndAntibodies;
