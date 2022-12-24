import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const useRedirectToStartPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear()
      navigate('/')
      localStorage.setItem('page', '/')
    }, 2500)
  }, [navigate])
}

export default useRedirectToStartPage
