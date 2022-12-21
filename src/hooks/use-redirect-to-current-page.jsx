import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirectToCurrentPage = () => {
  const navigate = useNavigate();
  let currentPage;

  useEffect(() => {
    if (localStorage.getItem('page') === '0') {
      currentPage = '/';
    } else if (localStorage.getItem('page') === '1') {
      currentPage = '/identity';
    } else if (localStorage.getItem('page') === '2') {
      currentPage = '/covid-questionnaire';
    } else if (localStorage.getItem('page') === '3') {
      currentPage = '/vaccination';
    } else if (localStorage.getItem('page') === '4') {
      currentPage = '/tips';
    } else if (localStorage.getItem('page') === '5') {
      currentPage = '/thank-you';
    } else {
      localStorage.setItem('page', '0');
      currentPage = '/';
    }
    navigate(currentPage);
  }, []);
};

export default useRedirectToCurrentPage;
