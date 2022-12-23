import { useNavigate } from 'react-router-dom';
import { SendDataContext } from '@/context';
import { useForm, useWatch, FormProvider } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import getRegisterRequest from '@/services';

export const useTipsPageForm = () => {
  const navigate = useNavigate();
  const {
    identity: { name, lastName, email },
    covidQuestionnaire: {
      haveCovid,
      haveAntibodies,
      covidSicknessDate,
      antibodiesQuantity,
      testDate,
    },
    vaccination: { haveVaccination, stage, whatAreYouWaitingFor },
    tips: {
      meetingField,
      setMeetingField,
      workInOfficeField,
      setWorkInOfficeField,
      physicalMeetingsField,
      setPhysicalMeetingsField,
      whatWouldYouChangeField,
      setWhatWouldYouChangeField,
    },
  } = useContext(SendDataContext);

  const form = useForm({
    defaultValues: {
      meeting_field: localStorage.getItem('meetingField') || '',
      work_in_office_field: localStorage.getItem('workInOfficeField') || '',
      physical_meetings_field:
        localStorage.getItem('physicalMeetingsField') || '',
      what_would_you_change_field:
        localStorage.getItem('whatWouldYouChangeField') || '',
    },
  });

  const { errors } = form.formState;

  const watchMeetingField = useWatch({
    control: form.control,
    name: 'meeting_field',
  });
  const watchWorkInOfficeField = useWatch({
    control: form.control,
    name: 'work_in_office_field',
  });
  const watchPhysicalMeetingsField = useWatch({
    control: form.control,
    name: 'physical_meetings_field',
  });
  const watchWhatWouldYouChangeField = useWatch({
    control: form.control,
    name: 'what_would_you_change_field',
  });
  const navigateLeft = () => {
    localStorage.setItem('from', '/vaccination');
    localStorage.setItem('page', '3');
    navigate('/vaccination', { replace: true });
  };

  const submit = () => {
    const registerRequest = getRegisterRequest({
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
    });
    localStorage.setItem('page', '/thank-you');
    navigate('/thank-you', { replace: true });
  };

  useEffect(() => {
    localStorage.setItem('meetingField', watchMeetingField);
    localStorage.setItem('workInOfficeField', watchWorkInOfficeField);
    localStorage.setItem('physicalMeetingsField', watchPhysicalMeetingsField);
    localStorage.setItem(
      'whatWouldYouChangeField',
      watchWhatWouldYouChangeField
    );

    setMeetingField(watchMeetingField);
    setWorkInOfficeField(watchWorkInOfficeField);
    setPhysicalMeetingsField(watchPhysicalMeetingsField);
    setWhatWouldYouChangeField(watchWhatWouldYouChangeField);
  }, [
    watchMeetingField,
    watchWorkInOfficeField,
    watchPhysicalMeetingsField,
    watchWhatWouldYouChangeField,
  ]);

  return {
    form,
    FormProvider,
    errors,
    handleSubmit: form.handleSubmit,
    submit,
    navigateLeft,
  };
};
