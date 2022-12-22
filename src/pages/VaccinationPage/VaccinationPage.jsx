import Layout from '/src/components/Layout.jsx';
import Form from '/src/pages/VaccinationPage/components/Form/Form';
import useRedirectToCurrentPage from '@/hooks/use-redirect-to-current-page';
import '@/css/vaccination-page-animation.css';

const VaccinationPage = () => {
  useRedirectToCurrentPage();
  return (
    <Layout>
      <div className='w-[95rem] flex justify-between overflow-hidden opacity-animation'>
        <div>
          <Form />
        </div>
        <img
          src='/assets/vaccination.png'
          className='object-top z-10 object-cover h-[48rem]'
        />
        <img
          src='/assets/star.png'
          className={`absolute left-[50%] top-[12%] vaccination-logo-from-${localStorage.getItem(
            'from'
          )}-animation`}
        />
      </div>
    </Layout>
  );
};

export default VaccinationPage;
