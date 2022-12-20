import Layout from '/src/components/Layout.jsx';
import Form from '/src/pages/VaccinationPage/components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const VaccinationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('page') !== '3') {
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
            src='/assets/vaccination.png'
            className='object-top object-cover h-[48rem]'
          />
        </div>
      </Layout>
    </>
  );
};

export default VaccinationPage;
