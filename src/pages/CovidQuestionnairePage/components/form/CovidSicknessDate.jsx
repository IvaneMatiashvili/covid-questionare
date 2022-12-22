import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';

const CovidSicknessDate = ({ controller: Controller, watch, control }) => {
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor='covid-sickness-date'
        className='block text-[1.4rem] font-arial font-bold text-dark-100 mt-[2.5rem]'
      >
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
      </label>

      <Controller
        id='covid-sickness-date'
        control={control}
        name='covid_sicknessDate'
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
            placeholderText={'დდ/თთ/წწ'}
            dateFormat='dd/MM/yyyy'
            className='placeholder-gray-500 placeholder-4 placeholder-base font-arial text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[1.5rem] ml-[1.25rem] border-2 border-border-gray pl-[24px]'
            onChange={onChange}
            onBlur={onBlur}
            selected={watch}
            ref-setter={register('covid_sicknessDate', {
              required: {
                value: true,
                message: 'გთხოვთ აირჩით თარიღი',
              },
            })}
          />
        )}
      />
    </>
  );
};

export default CovidSicknessDate;
