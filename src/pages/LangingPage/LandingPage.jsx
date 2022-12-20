import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('page') !== '0') {
      navigate(-1);
    }
  });
  return (
    <>
      <div className='w-screen h-screen bg-soft-brown flex justify-center items-center'>
        <div className='w-[10rem] flex flex-col justify-center items-center'>
          <img src='/assets/redberry.png' />
          <a
            className='flex flex-col justify-center items-center cursor-pointer mt-[6.3rem]'
            onClick={() => {
              localStorage.setItem('page', '1');
              navigate('/identity', { replace: true });
            }}
          >
            <spam className='font-bold text-[1.9rem]'>კითხვარის</spam>
            <spam className='font-bold text-[1.9rem]'>დაწყება</spam>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
