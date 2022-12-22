import { useNavigation } from './useNavigation';
import '@/css/landing-page-animation.css';

const LandingPage = () => {
  const { navigateToIdentityPage } = useNavigation();
  return (
    <div className='w-screen h-screen bg-soft-brown flex justify-center items-center opacity-animation'>
      <div className='flex flex-col justify-center items-center overflow-hidden'>
        <img
          src='/assets/redberry-full.png'
          className=' absolute w-screen h-screen landing-full-logo-animation opacity-0'
        />
        <img src='/assets/redberry.png' className='landing-logo-animation' />
        <div className='ml-[2px]'>
          <a
            className='flex flex-col justify-center items-center cursor-pointer mt-[6.3rem] start-questionnaire-container-animation hover:bg-shadow bg-cover'
            onClick={navigateToIdentityPage}
          >
            <img
              src='/assets/start.png'
              className='relative right-[2px] start-questionnaire-animation'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
