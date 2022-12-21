import { useNavigate } from 'react-router-dom';
import SendDataContext from '@/context/send-data-context';
import { useContext, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export const useVaccinationPageForm = () => {
  const navigate = useNavigate();
  const {
    vaccination: { setHaveVaccination, setStage, setWhatAreYouWaitingFor },
  } = useContext(SendDataContext);
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

  const navigateLeft = () => {
    localStorage.setItem('from', 'right');
    localStorage.setItem('page', '2');
    navigate('/covid-questionnaire', { replace: true });
  };
  const navigateRight = () => {
    localStorage.setItem('from', 'left');
    localStorage.setItem('page', '4');
    navigate('/tips', { replace: true });
  };

  useEffect(() => {
    localStorage.setItem('haveVaccination', watchHaveVaccination);
    localStorage.setItem('stage', watchStage);
    localStorage.setItem('whatAreYouWaitingFor', watchWhatAreYouWaitingFor);

    setHaveVaccination(watchHaveVaccination);
    setStage(watchStage);
    setWhatAreYouWaitingFor(watchWhatAreYouWaitingFor);
  }, [watchHaveVaccination, watchStage, watchWhatAreYouWaitingFor]);

  return {
    register,
    errors,
    handleSubmit,
    watchHaveVaccination,
    watchStage,
    watchWhatAreYouWaitingFor,
    navigateLeft,
    navigateRight,
  };
};
