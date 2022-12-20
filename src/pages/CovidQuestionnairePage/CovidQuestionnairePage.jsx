import Layout from '@/components/Layout';
import Form from '@/pages/CovidQuestionnairePage/components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CovidQuestionnairePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('page') !== '2') {
      navigate(-1);
    }
  });
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
