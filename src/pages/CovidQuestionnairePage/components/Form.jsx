import { Controller, useForm } from 'react-hook-form';
import HaveCovid from '/src/pages/CovidQuestionnairePage/components/form/HaveCovid.jsx';
import HaveAntibodies from '/src/pages/CovidQuestionnairePage/components/form/HaveAntibodies.jsx';
import CovidSicknessDate from '/src/pages/CovidQuestionnairePage/components/form/CovidSicknessDate.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import TestAndAntibodies from '/src/pages/CovidQuestionnairePage/components//form/TestAndAntibodies.jsx';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      HaveCovid: localStorage.getItem('HaveCovid') || '',
      HaveAntibodies: localStorage.getItem('HaveAntibodies') || '',
      CovidSicknessDate: localStorage.getItem('CovidSicknessDate')
        ? new Date(localStorage.getItem('CovidSicknessDate'))
        : '',
      AntibodiesQuantity: localStorage.getItem('AntibodiesQuantity') || '',
      TestDate: new Date(localStorage.getItem('TestDate')) || '',
    },
  });
  localStorage.setItem('HaveCovid', watch('HaveCovid'));
  localStorage.setItem('HaveAntibodies', watch('HaveAntibodies'));
  localStorage.setItem('AntibodiesQuantity', watch('AntibodiesQuantity'));
  localStorage.setItem('CovidSicknessDate', watch('CovidSicknessDate'));
  localStorage.setItem('TestDate', watch('TestDate'));

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <HaveCovid register={register} />
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.HaveCovid?.message}
      </p>
      {watch('HaveCovid') === 'yes' && <HaveAntibodies register={register} />}
      {watch('HaveCovid') === 'yes' && (
        <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
          {errors.HaveAntibodies?.message}
        </p>
      )}
      {watch('HaveAntibodies') === 'no' && watch('HaveCovid') === 'yes' && (
        <CovidSicknessDate
          register={register}
          watch={watch('CovidSicknessDate')}
          controller={Controller}
          control={control}
        />
      )}
      <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
        {errors.CovidSicknessDate?.message}
      </p>
      {watch('HaveAntibodies') === 'yes' && watch('HaveCovid') === 'yes' && (
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
