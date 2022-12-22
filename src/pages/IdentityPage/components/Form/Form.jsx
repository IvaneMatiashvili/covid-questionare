import { RightArrow } from '@/components';
import { useIdentityPageForm } from './useIdentityPageForm';
import { InputTypeText } from '@/components';
import { Error } from '@/components';

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
              value: 3,
              message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
            },
          }}
          id='name'
          key='name'
          placeholder='იოსებ'
          labelContent='სახელი*'
        />
        <Error errors={errors} name='name' />
        <InputTypeText
          name='last_name'
          erorrs={{
            required: 'გვარის ველის შევსება სავალდებულოა',
            minLength: {
              value: 3,
              message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
            },
          }}
          id='last-name'
          key='last-name'
          placeholder='ჯუღაშვილი'
          labelContent='გვარი*'
        />
        <Error errors={errors} name='last_name' />
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

        <Error errors={errors} name='email' />
        <button type='submit' className='absolute left-[55%] bottom-[5%]'>
          <RightArrow />
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
