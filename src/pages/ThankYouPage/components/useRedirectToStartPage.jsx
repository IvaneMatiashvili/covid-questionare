import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirectToStartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
      localStorage.setItem('page', '0');
    }, 2500);
  }, []);
};

export default useRedirectToStartPage;
