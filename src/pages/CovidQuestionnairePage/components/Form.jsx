import { Controller, useForm, useWatch } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import HaveCovid from '@/pages/CovidQuestionnairePage/components/form/HaveCovid';
import HaveAntibodies from '@/pages/CovidQuestionnairePage/components/form/HaveAntibodies';
import CovidSicknessDate from '@/pages/CovidQuestionnairePage/components/form/CovidSicknessDate';
import 'react-datepicker/dist/react-datepicker.css';
import TestAndAntibodies from '@/pages/CovidQuestionnairePage/components//form/TestAndAntibodies';
import { useContext, useEffect } from 'react';
import SendDataContext from '@/context/send-data-context';
import RightArrow from '@/components/icons/RightArrow';
import LeftArrow from '@/components/icons/LeftArrow';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const {
    covidQuestionnaire: {
      setHaveCovid,
      setHaveAntibodies,
      setCovidSicknessDate,
      setAntibodiesQuantity,
      setTestDate,
    },
  } = useContext(SendDataContext);

  const ctx = useContext(SendDataContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      haveCovid: localStorage.getItem('haveCovid') || '',
      haveAntibodies: localStorage.getItem('haveAntibodies') || '',
      covidSicknessDate:
        localStorage.getItem('covidSicknessDate') &&
        localStorage.getItem('covidSicknessDate').length > 10
          ? new Date(localStorage.getItem('covidSicknessDate'))
          : '',
      antibodiesQuantity: localStorage.getItem('antibodiesQuantity') || '',
      testDate:
        localStorage.getItem('testDate') &&
        localStorage.getItem('testDate').length > 10
          ? new Date(localStorage.getItem('testDate'))
          : '',
    },
  });
  const watchHaveCovid = useWatch({
    control,
    name: 'haveCovid',
  });
  const watchHaveAntibodies = useWatch({
    control,
    name: 'haveAntibodies',
  });
  const watchCovidSicknessDate = useWatch({
    control,
    name: 'covidSicknessDate',
  });
  const watchAntibodiesQuantity = useWatch({
    control,
    name: 'antibodiesQuantity',
  });
  const watchTestDate = useWatch({
    control,
    name: 'testDate',
  });

  useEffect(() => {
    localStorage.setItem('haveCovid', watchHaveCovid);
    localStorage.setItem('haveAntibodies', watchHaveAntibodies);
    localStorage.setItem('antibodiesQuantity', watchAntibodiesQuantity);
    localStorage.setItem('covidSicknessDate', watchCovidSicknessDate);
    localStorage.setItem('testDate', watchTestDate);

    setHaveCovid(watchHaveCovid);
    setHaveAntibodies(watchHaveAntibodies);
    setCovidSicknessDate(watchCovidSicknessDate);
    setAntibodiesQuantity(watchAntibodiesQuantity);
    setTestDate(watchTestDate);
  }, [
    watchHaveCovid,
    watchHaveAntibodies,
    watchAntibodiesQuantity,
    watchCovidSicknessDate,
    watchTestDate,
  ]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        localStorage.setItem('page', '3');
        navigate('/vaccination', { replace: true });
      })}
    >
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
        onClick={() => {
          localStorage.setItem('page', '1');
          navigate('/identity', { replace: true });
        }}
      >
        <LeftArrow />
      </div>
    </form>
  );
};

export default Form;
