import { Layout } from '@/components';
import { useRedirectToCurrentPage } from '@/hooks';
import '@/css/identity-page-animatiom.css';
import { Form } from './components';

const IdentityPage = () => {
  useRedirectToCurrentPage();
  return (
    <Layout>
      <div className='w-[95rem] flex justify-between opacity-animation'>
        <div>
          <Form />
          <div className='w-[14.8rem] mt-[10rem] h-[1px] bg-dark-100'></div>
          <p className='mt-[1.25rem] font-arial text-soft-gray font-normal text-base'>
            *-ით მონიშნული ველების შევსება
          </p>
          <p className='text-soft-gray font-arial font-normal text-base'>
            სავალდებულოა
          </p>
        </div>
        <img
          src='/assets/identity.png'
          className='object-top object-cover h-[50rem] z-10 relative bottom-10'
        />
        <img
          src='/assets/rectangle.png'
          className='h-[4rem] w-[40rem] absolute left-[50%] top-[33%] identity-logo-left-animation'
        />
      </div>
    </Layout>
  );
};

export default IdentityPage;
