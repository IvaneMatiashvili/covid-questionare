import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import SendDataContext from '@/context/send-data-context';
import { useForm, useWatch } from 'react-hook-form';

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
    register,
    handleSubmit,
    errors,
    watchHaveCovid,
    watchHaveAntibodies,
    watchAntibodiesQuantity,
    watchCovidSicknessDate,
    watchTestDate,
    control,
    navigateLeft,
    navigateRight,
  };
};
