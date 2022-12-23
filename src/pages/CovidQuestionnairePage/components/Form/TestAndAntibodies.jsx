import DatePicker from 'react-datepicker'
import { useFormContext } from 'react-hook-form'
import moment from 'moment'

const TestAndAntibodies = ({ controller: Controller, watch, control }) => {
  const { register, setValue } = useFormContext()
  return (
    <>
      <label
        htmlFor='test-date'
        className='block font-arial text-[1.4rem] font-bold text-dark-100 mt-10'
      >
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*
      </label>

      <Controller
        id='test-date'
        control={control}
        name='test_date'
        render={({ field: { onChange, onBlur } }) => (
          <DatePicker
            placeholderText={'რიცხვი'}
            dateFormat='dd/MM/yyyy'
            className='placeholder-gray-500 placeholder-4 font-arial placeholder-base text-dark-100 font-normal text-base bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-6 ml-5 border-2 border-border-gray pl-6'
            onChange={onChange}
            onBlur={onBlur}
            selected={watch}
            maxDate={moment().toDate()}
            ref-setter={register('test_date')}
          />
        )}
      />
      <input
        {...register('antibodies_quantity', {
          pattern: {
            value: /[0-9]/,
            message: 'გამოიყენეთ ციფრები',
          },
          onChange: (e) => {
            e.target.value = e.target.value.trim()
            setValue('antibodies_quantity', e.target.value.trim(), {
              shouldValidate: true,
            })
          },
        })}
        type='text'
        id='AntibodiesQuantity'
        placeholder='ანტისხეულების რაოდენობა'
        className='placeholder-gray-500 font-arial placeholder-4 placeholder-base text-dark-100 font-normal text-base bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-6 ml-5 border-2 border-border-gray pl-6'
      />
    </>
  )
}

export default TestAndAntibodies
