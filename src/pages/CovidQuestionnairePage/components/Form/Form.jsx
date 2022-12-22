import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import HaveCovid from './HaveCovid';
import HaveAntibodies from './HaveAntibodies';
import CovidSicknessDate from './CovidSicknessDate';
import 'react-datepicker/dist/react-datepicker.css';
import TestAndAntibodies from './TestAndAntibodies';
import { RightArrow } from '@/components';
import { LeftArrow } from '@/components';
import { Error } from '@/components';
import { useCovidQuestionnairePageForm } from './useCovidQuestionnairePageForm';

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
          render={({ message }) => <Error message={message} />}
        />
        {watchHaveCovid === 'yes' && <HaveAntibodies />}
        {watchHaveCovid === 'yes' && (
          <ErrorMessage
            errors={errors}
            name='have_antibodies'
            render={({ message }) => <Error message={message} />}
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
            render={({ message }) => <Error message={message} />}
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
