import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import SendDataContext from '@/context/send-data-context';
import { useForm, useWatch, FormProvider } from 'react-hook-form';

export const useCovidQuestionnairePageForm = () => {
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

  const form = useForm({
    defaultValues: {
      have_covid: localStorage.getItem('haveCovid') || '',
      have_antibodies: localStorage.getItem('haveAntibodies') || '',
      covid_sicknessDate:
        localStorage.getItem('covidSicknessDate') &&
        localStorage.getItem('covidSicknessDate').length > 10
          ? new Date(localStorage.getItem('covidSicknessDate'))
          : '',
      antibodies_quantity: localStorage.getItem('antibodiesQuantity') || '',
      test_date:
        localStorage.getItem('testDate') &&
        localStorage.getItem('testDate').length > 10
          ? new Date(localStorage.getItem('testDate'))
          : '',
    },
  });

  const { errors } = form.formState;

  const watchHaveCovid = useWatch({
    control: form.control,
    name: 'have_covid',
  });
  const watchHaveAntibodies = useWatch({
    control: form.control,
    name: 'have_antibodies',
  });
  const watchCovidSicknessDate = useWatch({
    control: form.control,
    name: 'covid_sicknessDate',
  });
  const watchAntibodiesQuantity = useWatch({
    control: form.control,
    name: 'antibodies_quantity',
  });
  const watchTestDate = useWatch({
    control: form.control,
    name: 'test_date',
  });

  const navigateLeft = () => {
    localStorage.setItem('page', '1');
    navigate('/identity', { replace: true });
  };
  const navigateRight = (data) => {
    localStorage.setItem('from', 'left');
    localStorage.setItem('page', '3');
    navigate('/vaccination', { replace: true });
  };

  useEffect(() => {
    console.log(watchHaveCovid);
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

  return {
    form,
    FormProvider,
    handleSubmit: form.handleSubmit,
    errors,
    watchHaveCovid,
    watchHaveAntibodies,
    watchAntibodiesQuantity,
    watchCovidSicknessDate,
    watchTestDate,
    control: form.control,
    navigateLeft,
    navigateRight,
  };
};
