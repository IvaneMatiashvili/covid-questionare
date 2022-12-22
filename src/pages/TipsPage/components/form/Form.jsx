import MeetingField from '@/pages/TipsPage/components/form/MeetingField.jsx';
import WorkInOfficeField from '@/pages/TipsPage/components/form/WorkInOfficeField.jsx';
import PhysicalMeetingsField from '@/pages/TipsPage/components/form/PhysicalMeetingsField.jsx';
import WhatWouldYouChangeField from '@/pages/TipsPage/components/form/WhatWouldYouChangeField.jsx';
import { ErrorMessage } from '@hookform/error-message';
import LeftArrow from '@/components/icons/LeftArrow.jsx';
import { useTipsPageForm } from '@/pages/TipsPage/components/form/useTipsPageForm.jsx';

const Form = () => {
  const { form, FormProvider, errors, handleSubmit, submit, navigateLeft } =
    useTipsPageForm();
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submit)}>
        <div className='mt-[2.6rem] mb-[8rem]'>
          <MeetingField />
          <ErrorMessage
            errors={errors}
            name='meeting_field'
            render={({ message }) => (
              <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
                {message}
              </p>
            )}
          />
          <WorkInOfficeField />
          <ErrorMessage
            errors={errors}
            name='work_in_office_field'
            render={({ message }) => (
              <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
                {message}
              </p>
            )}
          />
          <PhysicalMeetingsField />
          <WhatWouldYouChangeField />
          <div className='w-[38rem] flex justify-end mt-[2.5rem]'>
            <button
              type='submit'
              className='bg-btn-green w-[10rem] font-arial h-[3.5rem] z-20 font-bold text-base text-white rounded-[2.6rem] flex justify-center items-center'
            >
              დასრულება
            </button>
          </div>
        </div>
        <div
          className='absolute left-[50%] top-[181%] z-20 cursor-pointer'
          onClick={navigateLeft}
        >
          <LeftArrow />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
