import HaveVaccination from '/src/pages/VaccinationPage/components/form/HaveVaccination.jsx';
import Stage from '/src/pages/VaccinationPage/components/form/Stage.jsx';
import { useForm, useWatch } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import RegisterNow from '/src/pages/VaccinationPage/components/form/feedback/RegisterNow.jsx';
import WhatAreYouWaitingFor from '/src/pages/VaccinationPage/components/form/WhatAreYouWaitingFor.jsx';
import DoNotPlan from '/src/pages/VaccinationPage/components/form/feedback/DoNotPlan.jsx';
import PlanToVaccinate from '/src/pages/VaccinationPage/components/form/feedback/PlanToVaccinate.jsx';
import { useContext, useEffect } from 'react';
import SendDataContext from '@/context/send-data-context';
import RightArrow from '@/components/icons/RightArrow';
import LeftArrow from '@/components/icons/LeftArrow';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const {
    vaccination: { setHaveVaccination, setStage, setWhatAreYouWaitingFor },
  } = useContext(SendDataContext);
  const ctx = useContext(SendDataContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      haveVaccination: localStorage.getItem('haveVaccination') || '',
      stage: localStorage.getItem('stage') || '',
      whatAreYouWaitingFor: localStorage.getItem('whatAreYouWaitingFor') || '',
    },
  });
  const watchHaveVaccination = useWatch({
    control,
    name: 'haveVaccination',
  });
  const watchStage = useWatch({
    control,
    name: 'stage',
  });
  const watchWhatAreYouWaitingFor = useWatch({
    control,
    name: 'whatAreYouWaitingFor',
  });

  useEffect(() => {
    localStorage.setItem('haveVaccination', watchHaveVaccination);
    localStorage.setItem('stage', watchStage);
    localStorage.setItem('whatAreYouWaitingFor', watchWhatAreYouWaitingFor);

    setHaveVaccination(watchHaveVaccination);
    setStage(watchStage);
    setWhatAreYouWaitingFor(watchWhatAreYouWaitingFor);
  }, [watchHaveVaccination, watchStage, watchWhatAreYouWaitingFor]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        localStorage.setItem('page', '4');
        navigate('/tips', { replace: true });
      })}
    >
      <HaveVaccination register={register} />
      <ErrorMessage
        errors={errors}
        name='haveVaccination'
        render={({ message }) => (
          <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
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
            <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
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
            <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
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
        onClick={() => {
          localStorage.setItem('page', '2');
          navigate('/covid-questionnaire', { replace: true });
        }}
      >
        <LeftArrow />
      </div>
    </form>
  );
};

export default Form;
