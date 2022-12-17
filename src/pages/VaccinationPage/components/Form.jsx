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
      HaveVaccination: localStorage.getItem('HaveVaccination') || '',
      Stage: localStorage.getItem('Stage') || '',
      WhatAreYouWaitingFor: localStorage.getItem('WhatAreYouWaitingFor') || '',
    },
  });

  localStorage.setItem('HaveVaccination', watch('HaveVaccination'));
  localStorage.setItem('Stage', watch('Stage'));
  localStorage.setItem('WhatAreYouWaitingFor', watch('WhatAreYouWaitingFor'));
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <HaveVaccination register={register} />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.HaveVaccination?.message}
      </p>
      {watch('HaveVaccination') === 'yes' && <Stage register={register} />}
      {watch('HaveVaccination') === 'yes' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.Stage?.message}
        </p>
      )}

      {watch('HaveVaccination') === 'yes' && watch('Stage') === 'secondNot' && (
        <RegisterNow />
      )}
      {watch('HaveVaccination') === 'no' && (
        <WhatAreYouWaitingFor register={register} />
      )}
      {watch('HaveVaccination') === 'no' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.WhatAreYouWaitingFor?.message}
        </p>
      )}
      {watch('HaveVaccination') === 'no' &&
        watch('WhatAreYouWaitingFor') === 'doNotPlan' && <DoNotPlan />}
      {watch('HaveVaccination') === 'no' &&
        watch('WhatAreYouWaitingFor') === 'HaveCovid' && <PlanToVaccinate />}
      <button type='submit'>submit</button>
    </form>
  );
};

export default Form;
