import MeetingField from './MeetingField';
import WorkInOfficeField from './WorkInOfficeField';
import PhysicalMeetingsField from './PhysicalMeetingsField';
import WhatWouldYouChangeField from './WhatWouldYouChangeField';
import { ErrorMessage } from '@hookform/error-message';
import { LeftArrow } from '@/components';
import { Error } from '@/components';
import { useTipsPageForm } from './useTipsPageForm';

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
            render={({ message }) => <Error message={message} />}
          />
          <WorkInOfficeField />
          <ErrorMessage
            errors={errors}
            name='work_in_office_field'
            render={({ message }) => <Error message={message} />}
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
