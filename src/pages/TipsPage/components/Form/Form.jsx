import MeetingField from './MeetingField'
import WorkInOfficeField from './WorkInOfficeField'
import PhysicalMeetingsField from './PhysicalMeetingsField'
import WhatWouldYouChangeField from './WhatWouldYouChangeField'
import { LeftArrow, Error } from '@/components'
import { useTipsPageForm } from './useTipsPageForm.js'

const Form = () => {
  const { form, FormProvider, errors, handleSubmit, submit, navigateLeft } =
    useTipsPageForm()
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submit)} className='mb-32'>
        <div className='mt-[2.6rem] mb-4'>
          <MeetingField />
          <div className='h-2 mt-2'>
            <Error errors={errors} relative={'relative'} name='meeting_field' />
          </div>

          <WorkInOfficeField />
          <div className='h-2 mt-2'>
            <Error
              errors={errors}
              relative={'relative'}
              name='work_in_office_field'
            />
          </div>

          <PhysicalMeetingsField />

          <WhatWouldYouChangeField />
          <div className='w-[38rem] flex justify-end mt-10'>
            <button
              type='submit'
              className='bg-btn-green w-40 font-arial h-14 z-20 font-bold text-base text-white rounded-[2.6rem] flex justify-center items-center'
            >
              დასრულება
            </button>
          </div>
        </div>
        <div
          className='relative left-[40%] bottom-[10%] z-20 cursor-pointer'
          onClick={navigateLeft}
        >
          <LeftArrow />
        </div>
      </form>
    </FormProvider>
  )
}

export default Form
