import Layout from '@/components/Layout';
import Form from '@/pages/CovidQuestionnairePage/components/form/Form.jsx';
import useRedirectToCurrentPage from '@/hooks/use-redirect-to-current-page';
import '@/css/covid-questionnaire-page-animation.css';

const CovidQuestionnairePage = () => {
  useRedirectToCurrentPage();
  return (
    <>
      <Layout>
        <div className='w-[95rem] flex justify-between overflow-hidden opacity-animation'>
          <div>
            <Form />
          </div>
          <img
            src='/assets/covid-questionnaire.png'
            className='object-top object-cover z-10 h-[48rem]'
          />
          <img
            src='/assets/circle.png'
            className={`absolute left-[50%] top-[33%] covid-questionnaire-logo-from-${localStorage.getItem(
              'from'
            )}-animation`}
          />
        </div>
      </Layout>
    </>
  );
};

export default CovidQuestionnairePage;
