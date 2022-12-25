import { useNavigate } from 'react-router-dom'
import { SendDataContext } from '@/context'
import { useContext, useEffect } from 'react'
import { useForm, useWatch, FormProvider } from 'react-hook-form'

export const useVaccinationPageForm = () => {
  const navigate = useNavigate()
  const { dispatch } = useContext(SendDataContext)

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

  useEffect(() => {
    localStorage.setItem('haveVaccination', watchHaveVaccination)
    localStorage.setItem('stage', watchStage)
    localStorage.setItem('whatAreYouWaitingFor', watchWhatAreYouWaitingFor)

    dispatch({
      type: 'vaccination',
      key: 'vaccination',
      value: {
        have_vaccination: watchHaveVaccination,
        stage: watchStage,
        what_are_you_waiting_for: watchWhatAreYouWaitingFor,
      },
    })

    if (isValid) {
      localStorage.setItem('vaccinationValid', 'yes')
    } else {
      localStorage.setItem('vaccinationValid', 'no')
    }
  }, [
    watchHaveVaccination,
    watchStage,
    watchWhatAreYouWaitingFor,
    isValid,
    dispatch,
  ])

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
    isValid,
  }
}
