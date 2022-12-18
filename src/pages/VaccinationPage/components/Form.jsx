import HaveVaccination from '/src/pages/VaccinationPage/components/form/HaveVaccination.jsx';
import Stage from '/src/pages/VaccinationPage/components/form/Stage.jsx';
import { useForm } from 'react-hook-form';
import RegisterNow from '/src/pages/VaccinationPage/components/form/feedback/RegisterNow.jsx';
import WhatAreYouWaitingFor from '/src/pages/VaccinationPage/components/form/WhatAreYouWaitingFor.jsx';
import DoNotPlan from '/src/pages/VaccinationPage/components/form/feedback/DoNotPlan.jsx';
import PlanToVaccinate from '/src/pages/VaccinationPage/components/form/feedback/PlanToVaccinate.jsx';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      haveVaccination: localStorage.getItem('haveVaccination') || '',
      stage: localStorage.getItem('stage') || '',
      whatAreYouWaitingFor: localStorage.getItem('whatAreYouWaitingFor') || '',
    },
  });

  localStorage.setItem('haveVaccination', watch('haveVaccination'));
  localStorage.setItem('stage', watch('stage'));
  localStorage.setItem('whatAreYouWaitingFor', watch('whatAreYouWaitingFor'));
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <HaveVaccination register={register} />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.haveVaccination?.message}
      </p>
      {watch('haveVaccination') === 'yes' && <Stage register={register} />}
      {watch('haveVaccination') === 'yes' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.stage?.message}
        </p>
      )}

      {watch('haveVaccination') === 'yes' && watch('stage') === 'secondNot' && (
        <RegisterNow />
      )}
      {watch('haveVaccination') === 'no' && (
        <WhatAreYouWaitingFor register={register} />
      )}
      {watch('haveVaccination') === 'no' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.whatAreYouWaitingFor?.message}
        </p>
      )}
      {watch('haveVaccination') === 'no' &&
        watch('whatAreYouWaitingFor') === 'doNotPlan' && <DoNotPlan />}
      {watch('haveVaccination') === 'no' &&
        watch('whatAreYouWaitingFor') === 'HaveCovid' && <PlanToVaccinate />}
      <button type='submit'>submit</button>
    </form>
  );
};

export default Form;
