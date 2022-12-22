import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirectToCurrentPage = () => {
  const navigate = useNavigate();
  let currentPage;

  useEffect(() => {
    localStorage.getItem('page')
      ? (currentPage = localStorage.getItem('page'))
      : (currentPage = '/');

    navigate(currentPage);
  }, []);
};

export default useRedirectToCurrentPage;
