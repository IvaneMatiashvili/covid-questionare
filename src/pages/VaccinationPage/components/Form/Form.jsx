import HaveVaccination from './HaveVaccination';
import Stage from './Stage';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterNow } from './feedback';
import WhatAreYouWaitingFor from './WhatAreYouWaitingFor';
import { DoNotPlan } from './feedback';
import { PlanToVaccinate } from './feedback';
import { RightArrow } from '@/components';
import { LeftArrow } from '@/components';
import { Error } from '@/components';
import { useVaccinationPageForm } from './useVaccinationPageForm';

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
        <ErrorMessage
          errors={errors}
          name='have_vaccination'
          render={({ message }) => <Error message={message} />}
        />
        {watchHaveVaccination === 'yes' && <Stage />}
        {watchHaveVaccination === 'yes' && (
          <ErrorMessage
            errors={errors}
            name='stage'
            render={({ message }) => <Error message={message} />}
          />
        )}
        {watchHaveVaccination === 'yes' &&
          watchStage === 'first_dosage_and_not_registered_yet' && (
            <RegisterNow />
          )}
        {watchHaveVaccination === 'no' && <WhatAreYouWaitingFor />}
        {watchHaveVaccination === 'no' && (
          <ErrorMessage
            errors={errors}
            name='what_are_you_waiting_for'
            render={({ message }) => <Error message={message} />}
          />
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
          className='absolute left-[50%] bottom-[5%] cursor-pointer'
          onClick={navigateLeft}
        >
          <LeftArrow />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
