import { RightArrow, InputTypeText, Error } from '@/components'
import { useIdentityPageForm } from './useIdentityPageForm.js'

const Form = () => {
  const { form, handleSubmit, errors, navigateRight, FormProvider, isValid } =
    useIdentityPageForm()

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(navigateRight)}>
        <InputTypeText
          name='name'
          errors={{
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
          errors={{
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
          errors={{
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

        <button
          type='submit'
          className={`absolute left-[55%] bottom-[5%] ${
            isValid ? 'cursor-pointer' : 'cursor-default'
          }`}
        >
          <RightArrow isValid={isValid} />
        </button>
      </form>
    </FormProvider>
  )
}

export default Form
