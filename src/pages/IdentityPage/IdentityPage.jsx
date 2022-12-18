import Layout from '@/components/Layout';
import Form from '@/pages/IdentityPage/components/Form';

const IdentityPage = () => {
  localStorage.setItem('page', '1');
  return (
    <>
      <Layout>
        <div className='w-[95rem] flex justify-between'>
          <div>
            <Form />
            <div className='w-[14.8rem] mt-[10rem] h-[1px] bg-dark-100'></div>
            <p className='mt-[1.25rem] text-soft-gray font-normal text-base'>
              *-ით მონიშნული ველების შევსება
            </p>
            <p className='text-soft-gray font-normal text-base'>სავალდებულოა</p>
          </div>
          <img
            src='/assets/identity.png'
            className='object-top object-cover h-[50rem] relative bottom-10'
          />
        </div>
      </Layout>
    </>
  );
};

export default IdentityPage;
