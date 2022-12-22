import HaveVaccination from './HaveVaccination';
import Stage from './Stage';
import { RegisterNow } from './feedback';
import WhatAreYouWaitingFor from './WhatAreYouWaitingFor';
import { DoNotPlan } from './feedback';
import { PlanToVaccinate } from './feedback';
import { RightArrow, LeftArrow, Error } from '@/components';
import { useVaccinationPageForm } from './useVaccinationPageForm.js';

const Form = () => {
  const {
    form,
    FormProvider,
    handleSubmit,
    errors,
    watchHaveVaccination,
    watchStage,
    watchWhatAreYouWaitingFor,
    navigateLeft,
    navigateRight,
  } = useVaccinationPageForm();
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(navigateRight)}>
        <HaveVaccination />
        <Error errors={errors} name='have_vaccination' />

        {watchHaveVaccination === 'yes' && <Stage />}

        {watchHaveVaccination === 'yes' && (
          <Error errors={errors} name='stage' />
        )}

        {watchHaveVaccination === 'yes' &&
          watchStage === 'first_dosage_and_not_registered_yet' && (
            <RegisterNow />
          )}

        {watchHaveVaccination === 'no' && <WhatAreYouWaitingFor />}

        {watchHaveVaccination === 'no' && (
          <Error errors={errors} name='what_are_you_waiting_for' />
        )}

        {watchHaveVaccination === 'no' &&
          watchWhatAreYouWaitingFor === 'not_planning' && <DoNotPlan />}

        {watchHaveVaccination === 'no' &&
          watchWhatAreYouWaitingFor ===
            'had_covid_and_planning_to_be_vaccinated' && <PlanToVaccinate />}
        <button type='submit' className='absolute left-[55%] bottom-[5%]'>
          <RightArrow />
        </button>
        <div
          className='absolute left-1/2 bottom-[5%] cursor-pointer'
          onClick={navigateLeft}
        >
          <LeftArrow />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
