import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { SendDataContext } from '@/context'
import { useForm, useWatch, FormProvider } from 'react-hook-form'

export const useCovidQuestionnairePageForm = () => {
  const navigate = useNavigate()
  const { dispatch } = useContext(SendDataContext)

  const form = useForm({
    defaultValues: {
      have_covid: localStorage.getItem('haveCovid') || '',
      have_antibodies: localStorage.getItem('haveAntibodies') || '',
      covid_sicknessDate:
        localStorage.getItem('covidSicknessDate') &&
        localStorage.getItem('covidSicknessDate').length > 10
          ? new Date(localStorage.getItem('covidSicknessDate'))
          : '',
      antibodies_quantity: localStorage.getItem('antibodiesQuantity') || '',
      test_date:
        localStorage.getItem('testDate') &&
        localStorage.getItem('testDate').length > 10
          ? new Date(localStorage.getItem('testDate'))
          : '',
    },
  })

  const { errors, isValid } = form.formState

  const watchHaveCovid = useWatch({
    control: form.control,
    name: 'have_covid',
  })
  const watchHaveAntibodies = useWatch({
    control: form.control,
    name: 'have_antibodies',
  })
  const watchCovidSicknessDate = useWatch({
    control: form.control,
    name: 'covid_sicknessDate',
  })
  const watchAntibodiesQuantity = useWatch({
    control: form.control,
    name: 'antibodies_quantity',
  })
  const watchTestDate = useWatch({
    control: form.control,
    name: 'test_date',
  })

  const navigateLeft = () => {
    localStorage.setItem('page', '/identity')
    navigate('/identity')
  }
  const navigateRight = (data) => {
    localStorage.setItem('from', 'left')
    localStorage.setItem('page', '/vaccination')
    navigate('/vaccination')
  }

  useEffect(() => {
    localStorage.setItem('haveCovid', watchHaveCovid)
    localStorage.setItem('haveAntibodies', watchHaveAntibodies)
    localStorage.setItem('antibodiesQuantity', watchAntibodiesQuantity)
    localStorage.setItem('covidSicknessDate', watchCovidSicknessDate)
    localStorage.setItem('testDate', watchTestDate)

    dispatch({
      type: 'covid',
      value: {
        have_covid: watchHaveCovid,
        have_antibodies: watchHaveAntibodies,
        covid_sickness_date: watchCovidSicknessDate,
        antibodies_quantity: watchAntibodiesQuantity,
        test_date: watchTestDate,
      },
    })

    if (isValid) {
      localStorage.setItem('covidValid', 'yes')
    } else {
      localStorage.setItem('covidValid', 'no')
    }
  }, [
    watchHaveCovid,
    watchHaveAntibodies,
    watchAntibodiesQuantity,
    watchCovidSicknessDate,
    watchTestDate,
    isValid,
    dispatch,
  ])

  return {
    form,
    FormProvider,
    handleSubmit: form.handleSubmit,
    errors,
    watchHaveCovid,
    watchHaveAntibodies,
    watchAntibodiesQuantity,
    watchCovidSicknessDate,
    watchTestDate,
    control: form.control,
    navigateLeft,
    navigateRight,
    isValid,
  }
}
