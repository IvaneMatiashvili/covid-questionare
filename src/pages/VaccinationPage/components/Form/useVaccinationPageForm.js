import { useNavigate } from 'react-router-dom'
import { SendDataContext } from '@/context'
import { useContext, useEffect, useState } from 'react'
import { useForm, useWatch, FormProvider } from 'react-hook-form'

export const useVaccinationPageForm = () => {
  const navigate = useNavigate()
  const {
    vaccination: { setHaveVaccination, setStage, setWhatAreYouWaitingFor },
  } = useContext(SendDataContext)

  const form = useForm({
    defaultValues: {
      have_vaccination: localStorage.getItem('haveVaccination') || '',
      stage: localStorage.getItem('stage') || '',
      what_are_you_waiting_for:
        localStorage.getItem('whatAreYouWaitingFor') || '',
    },
  })
  const { errors, isValid } = form.formState
  const watchHaveVaccination = useWatch({
    control: form.control,
    name: 'have_vaccination',
  })
  const watchStage = useWatch({
    control: form.control,
    name: 'stage',
  })
  const watchWhatAreYouWaitingFor = useWatch({
    control: form.control,
    name: 'what_are_you_waiting_for',
  })

  const navigateLeft = () => {
    localStorage.setItem('from', 'right')
    localStorage.setItem('page', '/covid-questionnaire')
    navigate('/covid-questionnaire')
  }
  const navigateRight = () => {
    localStorage.setItem('from', 'left')
    localStorage.setItem('page', '/tips')
    navigate('/tips')
  }
  let [color, setColor] = useState(false)
  let [cursor, setCursor] = useState('cursor-default')

  useEffect(() => {
    localStorage.setItem('haveVaccination', watchHaveVaccination)
    localStorage.setItem('stage', watchStage)
    localStorage.setItem('whatAreYouWaitingFor', watchWhatAreYouWaitingFor)

    setHaveVaccination(watchHaveVaccination)
    setStage(watchStage)
    setWhatAreYouWaitingFor(watchWhatAreYouWaitingFor)

    if (isValid) {
      localStorage.setItem('vaccinationValid', 'yes')
      setColor(true)
      setCursor('cursor-pointer')
    } else {
      localStorage.setItem('vaccinationValid', 'no')
      setCursor('cursor-default')
      setColor(false)
    }
  }, [watchHaveVaccination, watchStage, watchWhatAreYouWaitingFor, isValid])

  return {
    form,
    FormProvider,
    errors,
    handleSubmit: form.handleSubmit,
    watchHaveVaccination,
    watchStage,
    watchWhatAreYouWaitingFor,
    navigateLeft,
    navigateRight,
    color,
    cursor,
  }
}
