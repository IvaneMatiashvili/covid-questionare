import { useContext, useEffect, useState } from 'react'
import { SendDataContext } from '@/context'
import { useForm, useWatch, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useIdentityPageForm = () => {
  const navigate = useNavigate()
  const {
    identity: { setName, setLastName, setEmail },
  } = useContext(SendDataContext)

  const form = useForm({
    defaultValues: {
      name: localStorage.getItem('name') || '',
      last_name: localStorage.getItem('lastName') || '',
      email: localStorage.getItem('email') || '',
    },
  })

  const { errors, isValid } = form.formState

  const watchName = useWatch({
    control: form.control,
    name: 'name',
  })
  const watchLastName = useWatch({
    control: form.control,
    name: 'last_name',
  })
  const watchEmail = useWatch({
    control: form.control,
    name: 'email',
  })

  if (errors) {
  }
  const navigateRight = (data) => {
    localStorage.setItem('from', 'left')
    localStorage.setItem('page', '/covid-questionnaire')
    navigate('/covid-questionnaire')
  }

  let [color, setColor] = useState(false)
  let [cursor, setCursor] = useState('cursor-default')

  useEffect(() => {
    localStorage.setItem('name', watchName)
    localStorage.setItem('lastName', watchLastName)
    localStorage.setItem('email', watchEmail)

    setName(watchName)
    setLastName(watchLastName)
    setEmail(watchEmail)
    if (isValid) {
      localStorage.setItem('identityValid', 'yes')
      setColor(true)
      setCursor('cursor-pointer')
    } else {
      localStorage.setItem('identityValid', 'no')
      setCursor('cursor-default')
      setColor(false)
    }
  }, [watchName, watchLastName, watchEmail, isValid])
  return {
    form,
    handleSubmit: form.handleSubmit,
    errors,
    navigate,
    navigateRight,
    FormProvider,
    color,
    cursor,
  }
}
