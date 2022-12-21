import { ErrorMessage } from '@hookform/error-message';
import RightArrow from '@/components/icons/RightArrow';
import { useIdentityPageForm } from '@/pages/IdentityPage/components/form/useIdentityPageForm';

const Form = () => {
  const { register, handleSubmit, errors, navigate, navigateRight } =
    useIdentityPageForm();

  return (
    <form onSubmit={handleSubmit(navigateRight)}>
      <label
        htmlFor='name'
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
      <ErrorMessage
        errors={errors}
        name='name'
        render={({ message }) => (
          <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
            {message}
          </p>
        )}
      />
      <label
        htmlFor='last-name'
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
      <ErrorMessage
        errors={errors}
        name='lastName'
        render={({ message }) => (
          <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
            {message}
          </p>
        )}
      />
      <label
        htmlFor='email'
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

      <ErrorMessage
        errors={errors}
        name='email'
        render={({ message }) => (
          <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
            {message}
          </p>
        )}
      />
      <button type='submit' className='absolute left-[55%] bottom-[5%]'>
        <RightArrow />
      </button>
    </form>
  );
};

export default Form;
