import { Controller, useForm } from 'react-hook-form';
import HaveCovid from '@/pages/CovidQuestionnairePage/components/form/HaveCovid';
import HaveAntibodies from '@/pages/CovidQuestionnairePage/components/form/HaveAntibodies';
import CovidSicknessDate from '@/pages/CovidQuestionnairePage/components/form/CovidSicknessDate';
import 'react-datepicker/dist/react-datepicker.css';
import TestAndAntibodies from '@/pages/CovidQuestionnairePage/components//form/TestAndAntibodies';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      haveCovid: localStorage.getItem('haveCovid') || '',
      haveAntibodies: localStorage.getItem('haveAntibodies') || '',
      covidSicknessDate: localStorage.getItem('covidSicknessDate')
        ? new Date(localStorage.getItem('covidSicknessDate'))
        : '',
      antibodiesQuantity: localStorage.getItem('antibodiesQuantity') || '',
      testDate: new Date(localStorage.getItem('testDate')) || '',
    },
  });
  localStorage.setItem('haveCovid', watch('haveCovid'));
  localStorage.setItem('haveAntibodies', watch('haveAntibodies'));
  localStorage.setItem('antibodiesQuantity', watch('antibodiesQuantity'));
  localStorage.setItem('covidSicknessDate', watch('covidSicknessDate'));
  localStorage.setItem('testDate', watch('testDate'));

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <HaveCovid register={register} />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.haveCovid?.message}
      </p>
      {watch('haveCovid') === 'yes' && <HaveAntibodies register={register} />}
      {watch('haveCovid') === 'yes' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.haveAntibodies?.message}
        </p>
      )}
      {watch('haveAntibodies') === 'no' && watch('haveCovid') === 'yes' && (
        <CovidSicknessDate
          register={register}
          watch={watch('covidSicknessDate')}
          controller={Controller}
          control={control}
        />
      )}
      {watch('haveAntibodies') === 'no' && watch('haveCovid') === 'yes' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.covidSicknessDate?.message}
        </p>
      )}
      {watch('haveAntibodies') === 'yes' && watch('haveCovid') === 'yes' && (
        <TestAndAntibodies
          register={register}
          watch={watch}
          controller={Controller}
          control={control}
        />
      )}
      <button type='submit'>submit</button>
    </form>
  );
};

export default Form;
