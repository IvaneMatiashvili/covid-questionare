import MeetingField from '@/pages/TipsPage/components/form/MeetingField';
import WorkInOfficeField from '@/pages/TipsPage/components/form/WorkInOfficeField';
import PhysicalMeetingsField from '@/pages/TipsPage/components/form/PhysicalMeetingsField';
import WhatWouldYouChangeField from '@/pages/TipsPage/components/form/WhatWouldYouChangeField';
import { useForm, useWatch } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useContext, useEffect } from 'react';
import SendDataContext from '@/context/send-data-context';
import getRegisterRequest from '@/services/index';
import LeftArrow from '@/components/icons/LeftArrow';
import { useNavigate } from 'react-router-dom';

const Form = () => {
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
  const ctx = useContext(SendDataContext);

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

  return (
    <form
      onSubmit={handleSubmit((data) => {
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
      })}
    >
      <div className='mt-[2.6rem] mb-[8rem]'>
        <MeetingField register={register} />
        <ErrorMessage
          errors={errors}
          name='meetingField'
          render={({ message }) => (
            <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
        <WorkInOfficeField register={register} />
        <ErrorMessage
          errors={errors}
          name='workInOfficeField'
          render={({ message }) => (
            <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
        <PhysicalMeetingsField register={register} />
        <WhatWouldYouChangeField register={register} />
        <div className='w-[38rem] flex justify-end mt-[2.5rem]'>
          <button
            type='submit'
            className='bg-btn-green w-[10rem] h-[3.5rem] z-20 font-bold text-base text-white rounded-[2.6rem] flex justify-center items-center'
          >
            დასრულება
          </button>
        </div>
      </div>
      <div
        className='absolute left-[50%] top-[181%] z-20 cursor-pointer'
        onClick={() => {
          localStorage.setItem('page', '3');
          navigate('/vaccination', { replace: true });
        }}
      >
        <LeftArrow />
      </div>
    </form>
  );
};

export default Form;
