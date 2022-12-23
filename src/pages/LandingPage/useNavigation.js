import { useNavigate } from 'react-router-dom';
import { useRedirectToCurrentPage } from '@/hooks';

export const useNavigation = () => {
  const navigate = useNavigate();
  useRedirectToCurrentPage();
  const navigateToIdentityPage = () => {
    localStorage.setItem('page', '/identity');
    navigate('/identity', { replace: true });
  };
  return {
    navigateToIdentityPage,
  };
};
