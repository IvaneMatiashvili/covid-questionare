import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import HaveCovid from '@/pages/CovidQuestionnairePage/components/form/HaveCovid';
import HaveAntibodies from '@/pages/CovidQuestionnairePage/components/form/HaveAntibodies';
import CovidSicknessDate from '@/pages/CovidQuestionnairePage/components/form/CovidSicknessDate';
import 'react-datepicker/dist/react-datepicker.css';
import TestAndAntibodies from '@/pages/CovidQuestionnairePage/components/form/TestAndAntibodies';
import RightArrow from '@/components/icons/RightArrow';
import LeftArrow from '@/components/icons/LeftArrow';
import { useCovidQuestionnairePageForm } from '@/pages/CovidQuestionnairePage/components/form/useCovidQuestionnairePageForm';

const Form = () => {
  const {
    form,
    FormProvider,
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
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(navigateRight)}>
        <HaveCovid />
        <ErrorMessage
          errors={errors}
          name='have_covid'
          render={({ message }) => (
            <p className='absolute mt-2 font-arial ml-4 font-normal text-base text-text-error'>
              {message}
            </p>
          )}
        />
        {watchHaveCovid === 'yes' && <HaveAntibodies />}
        {watchHaveCovid === 'yes' && (
          <ErrorMessage
            errors={errors}
            name='have_antibodies'
            render={({ message }) => (
              <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
                {message}
              </p>
            )}
          />
        )}
        {watchHaveAntibodies === 'no' && watchHaveCovid === 'yes' && (
          <CovidSicknessDate
            watch={watchCovidSicknessDate}
            controller={Controller}
            control={control}
          />
        )}
        {watchHaveAntibodies === 'no' && watchHaveCovid === 'yes' && (
          <ErrorMessage
            errors={errors}
            name='covid_sicknessDate'
            render={({ message }) => (
              <p className='absolute font-arial mt-2 ml-4 font-normal text-base text-text-error'>
                {message}
              </p>
            )}
          />
        )}
        {watchHaveAntibodies === 'yes' && watchHaveCovid === 'yes' && (
          <TestAndAntibodies
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
    </FormProvider>
  );
};

export default Form;
