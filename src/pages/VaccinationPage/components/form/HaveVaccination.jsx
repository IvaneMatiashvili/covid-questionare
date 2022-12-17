import { Controller, useForm } from 'react-hook-form';

const HaveVaccination = (props) => {
  return (
    <div className='mt-[2.6rem]'>
      <p className='font-bold text-[1.3rem] text-dark-100'>უკვე აცრილი ხარ?*</p>
      <div className='flex flex-col'>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='vaccination-yes'
            type='radio'
            value='yes'
            {...props.register('HaveVaccination')}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='vaccination-yes'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            კი
          </label>
        </div>
        <div className='flex justify-start items-center ml-[1.25rem] mt-[1rem]'>
          <input
            id='vaccination-no'
            type='radio'
            value='no'
            {...props.register('HaveVaccination', {
              required: 'გთხოვთ მონიშნეთ პასუხი',
            })}
            className='w-[1.3rem] h-[1.3rem]'
          />
          <label
            htmlFor='vaccination-no'
            className='ml-2 font-normal text-[1.25rem] font-medium text-dark-100'
          >
            არა
          </label>
        </div>
      </div>
    </div>
  );
};

export default HaveVaccination;
