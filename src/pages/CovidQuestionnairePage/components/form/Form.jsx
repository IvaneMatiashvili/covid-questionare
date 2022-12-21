import { Controller, useForm, useWatch } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import HaveCovid from '@/pages/CovidQuestionnairePage/components/form/HaveCovid';
import HaveAntibodies from '@/pages/CovidQuestionnairePage/components/form/HaveAntibodies';
import CovidSicknessDate from '@/pages/CovidQuestionnairePage/components/form/CovidSicknessDate';
import 'react-datepicker/dist/react-datepicker.css';
import TestAndAntibodies from '@/pages/CovidQuestionnairePage/components//form/TestAndAntibodies';
import RightArrow from '@/components/icons/RightArrow';
import LeftArrow from '@/components/icons/LeftArrow';
import { useCovidQuestionnairePageForm } from '@/pages/CovidQuestionnairePage/components/form/useCovidQuestionnairePageForm.jsx';

const Form = () => {
  const {
    register,
    handleSubmit,
    errors,
    watchCovidSicknessDate,
    watchTestDate,
    watchHaveCovid,
    watchHaveAntibodies,
    control,
    navigateLeft,
    navigateRight,
  } = useCovidQuestionnairePageForm();
  return (
    <form onSubmit={handleSubmit(navigateRight)}>
      <HaveCovid register={register} />
      <ErrorMessage
        errors={errors}
        name='haveCovid'
        render={({ message }) => (
          <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
            {message}
          </p>
        )}
      />
      {watchHaveCovid === 'yes' && <HaveAntibodies register={register} />}
      {watchHaveCovid === 'yes' && (
        <ErrorMessage
          errors={errors}
          name='haveAntibodies'
          render={({ message }) => (
            <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
      )}
      {watchHaveAntibodies === 'no' && watchHaveCovid === 'yes' && (
        <CovidSicknessDate
          register={register}
          watch={watchCovidSicknessDate}
          controller={Controller}
          control={control}
        />
      )}
      {watchHaveAntibodies === 'no' && watchHaveCovid === 'yes' && (
        <ErrorMessage
          errors={errors}
          name='covidSicknessDate'
          render={({ message }) => (
            <p className='absolute mt-2 ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
      )}
      {watchHaveAntibodies === 'yes' && watchHaveCovid === 'yes' && (
        <TestAndAntibodies
          register={register}
          watch={watchTestDate}
          controller={Controller}
          control={control}
        />
      )}
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
