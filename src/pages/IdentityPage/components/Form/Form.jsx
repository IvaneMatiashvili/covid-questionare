import { ErrorMessage } from '@hookform/error-message';
import RightArrow from '@/components/icons/RightArrow.jsx';
import { useIdentityPageForm } from '@/pages/IdentityPage/components/Form/useIdentityPageForm.jsx';
import InputTypeText from '@/components/form/InputTypeText';

const Form = () => {
  const { form, handleSubmit, errors, navigateRight, FormProvider } =
    useIdentityPageForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(navigateRight)}>
        <InputTypeText
          name='name'
          erorrs={{
            required: 'სახელის ველის შევსება სავალდებულოა',
            minLength: {
              value: 2,
              message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
            },
          }}
          id='name'
          key='name'
          placeholder='იოსებ'
          labelContent='სახელი*'
        />
        <ErrorMessage
          errors={errors}
          name='name'
          render={({ message }) => (
            <p className='absolute mt-2 font-arial ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
        <InputTypeText
          name='last_name'
          erorrs={{
            required: 'გვარის ველის შევსება სავალდებულოა',
            minLength: {
              value: 2,
              message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან',
            },
          }}
          id='last-name'
          key='last-name'
          placeholder='ჯუღაშვილი'
          labelContent='გვარი*'
        />
        <ErrorMessage
          errors={errors}
          name='last_name'
          render={({ message }) => (
            <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
        <InputTypeText
          name='email'
          erorrs={{
            required: 'ემაილის ველის შევსება სავალდებულოა',
            pattern: {
              value: /^[\w.+\-]+@redberry\.ge$/,
              message:
                'გთხოვთ დარეგისტრირდეთ Redberry-ს ვალიდური მეილით (youremail@redberry.ge)',
            },
          }}
          id='email'
          key='email'
          placeholder='fbi@redberry.ge'
          labelContent='მეილი*'
        />

        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => (
            <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
        <button type='submit' className='absolute left-[55%] bottom-[5%]'>
          <RightArrow />
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
