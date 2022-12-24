import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const useNavigation = () => {
  const navigate = useNavigate()
  const navigateToIdentityPage = () => {
    localStorage.setItem('page', '/identity')
    navigate('/identity')
  }

  let [hasHover, setHasHover] = useState(false)
  let [isPointer, setIsPointer] = useState(false)

  const timer = setTimeout(() => {
    setHasHover(true)
    setIsPointer(true)
  }, 800)

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])

  return {
    navigateToIdentityPage,
    hasHover,
    isPointer,
  }
}
