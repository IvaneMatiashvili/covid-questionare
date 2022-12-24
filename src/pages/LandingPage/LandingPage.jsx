import { useNavigation } from './useNavigation.js'
import '@/css/landing-page-animation.css'

const LandingPage = () => {
  const { navigateToIdentityPage, hasHover, isPointer } = useNavigation()
  return (
    <div className='w-screen h-screen bg-soft-brown flex justify-center items-center overflow-hidden opacity-animation'>
      <div className='flex flex-col justify-center items-center overflow-hidden'>
        <div className='absolute flex justify-center items-center overflow-hidden h-screen w-screen'>
          <div className='absolute w-[200vw] h-[200vh] object-cover landing-full-logo overflow-hidden object-fill flex justify-center items-center mb-10'>
            <img
              src='/assets/redberry.png'
              className='w-[7rem] h-[7rem] object-fill landing-full-logo-animation relative bottom-[5%] opacity-1'
            />
          </div>
        </div>
        <div className='mt-6'>
          <a
            className={`flex flex-col justify-center overflow-hidden items-center h-16 w-52 ${
              isPointer && 'cursor-pointer'
            } mt-[6.3rem] start-questionnaire-container-animation`}
            onClick={navigateToIdentityPage}
          >
            <img
              src='/assets/start.png'
              className='relative start-questionnaire-animation h-16 w-52 object-contain'
            />
            <div
              className={`${
                hasHover && 'hover:bg-shadow'
              } bg-contain ml-12 bg-no-repeat shadow-container-animation absolute h-16 w-56`}
            ></div>
          </a>
        </div>
        <p>{hasHover}</p>
      </div>
    </div>
  )
}

export default LandingPage
