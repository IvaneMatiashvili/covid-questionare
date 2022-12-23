import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirectToCurrentPage = () => {
  const navigate = useNavigate();
  let currentPage = localStorage.getItem('page') || '/';
  useEffect(() => {
    navigate(currentPage);
  }, []);
};

export default useRedirectToCurrentPage;
