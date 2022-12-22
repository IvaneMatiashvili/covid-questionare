import { useNavigate } from 'react-router-dom';
import SendDataContext from '@/context/send-data-context';
import { useContext, useEffect } from 'react';
import { useForm, useWatch, FormProvider } from 'react-hook-form';

export const useVaccinationPageForm = () => {
  const navigate = useNavigate();
  const {
    vaccination: { setHaveVaccination, setStage, setWhatAreYouWaitingFor },
  } = useContext(SendDataContext);

  const form = useForm({
    defaultValues: {
      have_vaccination: localStorage.getItem('haveVaccination') || '',
      stage: localStorage.getItem('stage') || '',
      what_are_you_waiting_for:
        localStorage.getItem('whatAreYouWaitingFor') || '',
    },
  });
  const { errors } = form.formState;
  const watchHaveVaccination = useWatch({
    control: form.control,
    name: 'have_vaccination',
  });
  const watchStage = useWatch({
    control: form.control,
    name: 'stage',
  });
  const watchWhatAreYouWaitingFor = useWatch({
    control: form.control,
    name: 'what_are_you_waiting_for',
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
    form,
    FormProvider,
    errors,
    handleSubmit: form.handleSubmit,
    watchHaveVaccination,
    watchStage,
    watchWhatAreYouWaitingFor,
    navigateLeft,
    navigateRight,
  };
};
