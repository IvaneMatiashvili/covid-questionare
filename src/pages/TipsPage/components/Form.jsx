import MeetingField from '@/pages/TipsPage/components/form/MeetingField';
import WorkInOfficeField from '@/pages/TipsPage/components/form/WorkInOfficeField';
import PhysicalMeetingsField from '@/pages/TipsPage/components/form/PhysicalMeetingsField';
import WhatWouldYouChangeField from '@/pages/TipsPage/components/form/WhatWouldYouChangeField';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
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
  localStorage.setItem('meetingField', watch('meetingField'));
  localStorage.setItem('workInOfficeField', watch('workInOfficeField'));
  localStorage.setItem('physicalMeetingsField', watch('physicalMeetingsField'));
  localStorage.setItem(
    'whatWouldYouChangeField',
    watch('whatWouldYouChangeField')
  );

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className='mt-[2.6rem] mb-[8rem]'>
        <MeetingField register={register} />
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.meetingField?.message}
        </p>
        <WorkInOfficeField register={register} />
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.workInOfficeField?.message}
        </p>
        <PhysicalMeetingsField register={register} />
        <WhatWouldYouChangeField register={register} />
        <div className='w-[38rem] flex justify-end mt-[2.5rem]'>
          <button
            type='submit'
            className='bg-btn-green w-[10rem] h-[3.5rem] font-bold text-base text-white rounded-[2.6rem] flex justify-center items-center'
          >
            დასრულება
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
