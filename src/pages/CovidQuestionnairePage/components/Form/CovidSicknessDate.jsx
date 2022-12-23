import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';

const CovidSicknessDate = ({ controller: Controller, watch, control }) => {
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor='covid-sickness-date'
        className='block text-[1.4rem] font-arial font-bold text-dark-100 mt-10'
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
            className='placeholder-gray-500 placeholder-4 placeholder-base font-arial text-dark-100 font-normal text-base bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-6 ml-5 border-2 border-border-gray pl-6'
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
