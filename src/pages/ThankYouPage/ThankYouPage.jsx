import '@/css/thank-you-page-animation.css';
import { useRedirectToStartPage } from './components';

const ThankYou = () => {
  useRedirectToStartPage();
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-dark-100 opacity-animation'>
      <div className='w-[30rem]'>
        <img
          src='/assets/left-star.png'
          className='left-star relative left-[10%] mb-6'
        />
      </div>
      <div>
        <img src='/assets/thank-you.png' />
      </div>
      <div className='w-[30rem]'>
        <img
          src='/assets/right-star.png'
          className='right-star relative mt-4 left-[80%]'
        />
      </div>
    </div>
  );
};

export default ThankYou;
