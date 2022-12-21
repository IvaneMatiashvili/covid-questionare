import { useNavigate } from 'react-router-dom';
import SendDataContext from '@/context/send-data-context';
import { useForm, useWatch } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import getRegisterRequest from '@/services/index.js';

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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      meetingField: localStorage.getItem('meetingField') || '',
      workInOfficeField: localStorage.getItem('workInOfficeField') || '',
      physicalMeetingsField:
        localStorage.getItem('physicalMeetingsField') || '',
      whatWouldYouChangeField:
        localStorage.getItem('whatWouldYouChangeField') || '',
    },
  });
  const watchMeetingField = useWatch({
    control,
    name: 'meetingField',
  });
  const watchWorkInOfficeField = useWatch({
    control,
    name: 'workInOfficeField',
  });
  const watchPhysicalMeetingsField = useWatch({
    control,
    name: 'physicalMeetingsField',
  });
  const watchWhatWouldYouChangeField = useWatch({
    control,
    name: 'whatWouldYouChangeField',
  });
  const navigateLeft = () => {
    localStorage.setItem('from', 'right');
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
    localStorage.setItem('page', '5');
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
    register,
    errors,
    handleSubmit,
    submit,
    navigateLeft,
  };
};
