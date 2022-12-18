import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: localStorage.getItem('name') || '',
      lastName: localStorage.getItem('lastName') || '',
      email: localStorage.getItem('email') || '',
    },
  });

  localStorage.setItem('name', watch('name'));
  localStorage.setItem('lastName', watch('lastName'));
  localStorage.setItem('email', watch('email'));

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label
        for='name'
        className='block text-[1.4rem] font-bold text-dark-100 mt-[2.5rem]'
      >
        სახელი*
      </label>
      <input
        {...register('name', {
          required: 'სახელის ველის შევსება სავალდებულოა',
          minLength: {
            value: 2,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
          },
        })}
        id='name'
        placeholder='იოსებ'
        className='placeholder-gray-500 placeholder-4 placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[0.5rem] border-2 border-border-gray pl-[24px]'
      />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.name?.message}
      </p>
      <label
        For='last-name'
        className='block text-[1.4rem] mt-[2.5rem] font-bold text-dark-100'
      >
        გვარი*
      </label>
      <input
        {...register('lastName', {
          required: 'გვარის ველის შევსება სავალდებულოა',
          minLength: {
            value: 2,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
          },
        })}
        id='last-name'
        placeholder='ჯუღაშვილი'
        className='placeholder-gray-500 placeholder-4 placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[0.5rem] border-2 border-border-gray pl-[24px]'
      />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.lastName?.message}
      </p>
      <label
        For='email'
        className='block text-[1.4rem] mt-[2.5rem] font-bold text-dark-100'
      >
        მეილი*
      </label>
      <input
        {...register('email', {
          required: 'ემაილის ველის შევსება სავალდებულოა',
          pattern: {
            value: /^[\w.+\-]+@redberry\.ge$/,
            message:
              'გთხოვთ დარეგისტრირდეთ Redberry-ს ვალიდური მეილით (youremail@redberry.ge)',
          },
        })}
        id='email'
        placeholder='fbi@redberry.ge'
        className='placeholder-gray-500 placeholder-4 placeholder-base text-dark-100 font-normal text-[1rem] bg-soft-brown w-[30rem] h-[3.125rem] outline-none mt-[0.5rem] border-2 border-border-gray pl-[24px]'
      />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.email?.message}
      </p>
      <button type='submit'>submit</button>
    </form>
  );
};

export default Form;
