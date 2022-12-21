import { useContext, useEffect } from 'react';
import SendDataContext from '@/context/send-data-context';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const useIdentityPageForm = () => {
  const navigate = useNavigate();
  const {
    identity: { setName, setLastName, setEmail },
  } = useContext(SendDataContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: localStorage.getItem('name') || '',
      lastName: localStorage.getItem('lastName') || '',
      email: localStorage.getItem('email') || '',
    },
  });
  const watchName = useWatch({
    control,
    name: 'name',
  });
  const watchLastName = useWatch({
    control,
    name: 'lastName',
  });
  const watchEmail = useWatch({
    control,
    name: 'email',
  });

  const navigateRight = (data) => {
    localStorage.setItem('from', 'left');
    localStorage.setItem('page', '2');
    navigate('/covid-questionnaire', { replace: true });
  };

  useEffect(() => {
    localStorage.setItem('name', watchName);
    localStorage.setItem('lastName', watchLastName);
    localStorage.setItem('email', watchEmail);

    setName(watchName);
    setLastName(watchLastName);
    setEmail(watchEmail);
  }, [watchName, watchLastName, watchEmail]);
  return {
    register,
    handleSubmit,
    errors,
    navigate,
    navigateRight,
  };
};
