import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
  const navigate = useNavigate()
  const navigateToIdentityPage = () => {
    localStorage.setItem('page', '/identity')
    navigate('/identity')
  }
  return {
    navigateToIdentityPage,
  }
}
