import { useNavigate } from 'react-router-dom';
import useRedirectToCurrentPage from '@/hooks/use-redirect-to-current-page';
import '@/css/landing-page-animation.css';

const LandingPage = () => {
  const navigate = useNavigate();
  useRedirectToCurrentPage();
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
            className='flex flex-col justify-center items-center cursor-pointer mt-[6.3rem] hover:bg-shadow bg-cover'
            onClick={() => {
              localStorage.setItem('page', '1');
              navigate('/identity', { replace: true });
            }}
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
