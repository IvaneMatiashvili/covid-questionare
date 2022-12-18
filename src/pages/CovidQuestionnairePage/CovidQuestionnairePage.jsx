import Layout from '@/components/Layout';
import Form from '@/pages/CovidQuestionnairePage/components/Form';

const CovidQuestionnairePage = () => {
  localStorage.setItem('page', '2');
  return (
    <>
      <Layout>
        <div className='w-[95rem] flex justify-between overflow-hidden'>
          <div>
            <Form />
          </div>
          <img
            src='/assets/covid-questionnaire.png'
            className='object-top object-cover h-[48rem]'
          />
        </div>
      </Layout>
    </>
  );
};

export default CovidQuestionnairePage;
