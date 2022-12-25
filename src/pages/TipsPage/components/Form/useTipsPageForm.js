import { useNavigate } from 'react-router-dom'
import { SendDataContext } from '@/context'
import { useForm, useWatch, FormProvider } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import getRegisterRequest from '@/services'

export const useTipsPageForm = () => {
  const navigate = useNavigate()
  const {
    dispatch,
    reducerState: {
      identity: { name, last_name: lastName, email },
      covid: {
        have_covid: haveCovid,
        have_antibodies: haveAntibodies,
        covid_sickness_date: covidSicknessDate,
        antibodies_quantity: antibodiesQuantity,
        test_date: testDate,
      },
      vaccination: {
        have_vaccination: haveVaccination,
        stage,
        what_are_you_waiting_for: whatAreYouWaitingFor,
      },
      tips: {
        meeting_field: meetingField,
        work_in_office_field: workInOfficeField,
        physical_meetings_field: physicalMeetingsField,
        what_would_you_change_field: whatWouldYouChangeField,
      },
    },
  } = useContext(SendDataContext)

  const form = useForm({
    defaultValues: {
      meeting_field: localStorage.getItem('meetingField') || '',
      work_in_office_field: localStorage.getItem('workInOfficeField') || '',
      physical_meetings_field:
        localStorage.getItem('physicalMeetingsField') || '',
      what_would_you_change_field:
        localStorage.getItem('whatWouldYouChangeField') || '',
    },
  })

  const { errors, isValid } = form.formState

  const watchMeetingField = useWatch({
    control: form.control,
    name: 'meeting_field',
  })
  const watchWorkInOfficeField = useWatch({
    control: form.control,
    name: 'work_in_office_field',
  })
  const watchPhysicalMeetingsField = useWatch({
    control: form.control,
    name: 'physical_meetings_field',
  })
  const watchWhatWouldYouChangeField = useWatch({
    control: form.control,
    name: 'what_would_you_change_field',
  })
  const navigateLeft = () => {
    localStorage.setItem('from', 'right')
    localStorage.setItem('page', '/vaccination')
    navigate('/vaccination')
  }

  const submit = () => {
    if (
      localStorage.getItem('identityValid') === 'yes' &&
      localStorage.getItem('covidValid') === 'yes' &&
      localStorage.getItem('vaccinationValid') === 'yes' &&
      localStorage.getItem('tipsValid') === 'yes'
    ) {
      getRegisterRequest({
        name,
        lastName,
        email,
        haveCovid,
        haveAntibodies,
        covidSicknessDate,
        antibodiesQuantity,
        testDate,
        haveVaccination,
        stage,
        whatAreYouWaitingFor,
        meetingField,
        workInOfficeField,
        physicalMeetingsField,
        whatWouldYouChangeField,
      })

      localStorage.setItem('page', '/thank-you')
      navigate('/thank-you')
    } else {
      navigate('/identity')
    }
  }

  useEffect(() => {
    localStorage.setItem('meetingField', watchMeetingField)
    localStorage.setItem('workInOfficeField', watchWorkInOfficeField)
    localStorage.setItem('physicalMeetingsField', watchPhysicalMeetingsField)
    localStorage.setItem(
      'whatWouldYouChangeField',
      watchWhatWouldYouChangeField
    )

    dispatch({
      type: 'tips',
      value: {
        meeting_field: watchMeetingField,
        work_in_office_field: watchWorkInOfficeField,
        physical_meetings_field: watchPhysicalMeetingsField,
        what_would_you_change_field: watchWhatWouldYouChangeField,
      },
    })

    if (isValid) {
      localStorage.setItem('tipsValid', 'yes')
    } else {
      localStorage.setItem('tipsValid', 'no')
    }
  }, [
    watchMeetingField,
    watchWorkInOfficeField,
    watchPhysicalMeetingsField,
    watchWhatWouldYouChangeField,
    isValid,
    dispatch,
  ])

  return {
    form,
    FormProvider,
    errors,
    handleSubmit: form.handleSubmit,
    submit,
    navigateLeft,
  }
}
