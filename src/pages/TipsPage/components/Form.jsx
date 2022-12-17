import MeetingField from '/src/pages/TipsPage/components/form/MeetingField.jsx';
import WorkInOfficeField from '/src/pages/TipsPage/components/form/WorkInOfficeField.jsx';
import PhysicalMeetingsField from '/src/pages/TipsPage/components/form/PhysicalMeetingsField.jsx';
import WhatWouldYouChangeField from '/src/pages/TipsPage/components/form/WhatWouldYouChangeField.jsx';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      MeetingField: localStorage.getItem('MeetingField') || '',
      WorkInOfficeField: localStorage.getItem('WorkInOfficeField') || '',
      PhysicalMeetingsField:
        localStorage.getItem('PhysicalMeetingsField') || '',
      WhatWouldYouChangeField:
        localStorage.getItem('WhatWouldYouChangeField') || '',
    },
  });
  localStorage.setItem('MeetingField', watch('MeetingField'));
  localStorage.setItem('WorkInOfficeField', watch('WorkInOfficeField'));
  localStorage.setItem('PhysicalMeetingsField', watch('PhysicalMeetingsField'));
  localStorage.setItem(
    'WhatWouldYouChangeField',
    watch('WhatWouldYouChangeField')
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
          {errors.MeetingField?.message}
        </p>
        <WorkInOfficeField register={register} />
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.WorkInOfficeField?.message}
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
