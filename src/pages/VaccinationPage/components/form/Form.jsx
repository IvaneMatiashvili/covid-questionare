import HaveVaccination from '/src/pages/VaccinationPage/components/form/HaveVaccination';
import Stage from '/src/pages/VaccinationPage/components/form/Stage';
import { ErrorMessage } from '@hookform/error-message';
import RegisterNow from '/src/pages/VaccinationPage/components/form/feedback/RegisterNow';
import WhatAreYouWaitingFor from '/src/pages/VaccinationPage/components/form/WhatAreYouWaitingFor';
import DoNotPlan from '/src/pages/VaccinationPage/components/form/feedback/DoNotPlan';
import PlanToVaccinate from '/src/pages/VaccinationPage/components/form/feedback/PlanToVaccinate';
import RightArrow from '@/components/icons/RightArrow.jsx';
import LeftArrow from '@/components/icons/LeftArrow.jsx';
import { useVaccinationPageForm } from '@/pages/VaccinationPage/components/form/useVaccinationPageForm';

const Form = () => {
  const {
    register,
    handleSubmit,
    errors,
    watchHaveVaccination,
    watchStage,
    watchWhatAreYouWaitingFor,
    navigateLeft,
    navigateRight,
  } = useVaccinationPageForm();
  return (
    <form onSubmit={handleSubmit(navigateRight)}>
      <HaveVaccination register={register} />
      <ErrorMessage
        errors={errors}
        name='haveVaccination'
        render={({ message }) => (
          <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
            {message}
          </p>
        )}
      />
      {watchHaveVaccination === 'yes' && <Stage register={register} />}
      {watchHaveVaccination === 'yes' && (
        <ErrorMessage
          errors={errors}
          name='stage'
          render={({ message }) => (
            <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
      )}
      {watchHaveVaccination === 'yes' &&
        watchStage === 'first_dosage_and_not_registered_yet' && <RegisterNow />}
      {watchHaveVaccination === 'no' && (
        <WhatAreYouWaitingFor register={register} />
      )}
      {watchHaveVaccination === 'no' && (
        <ErrorMessage
          errors={errors}
          name='whatAreYouWaitingFor'
          render={({ message }) => (
            <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
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
  );
};

export default Form;
