import Layout from '/src/components/Layout.jsx';
import Form from '/src/pages/VaccinationPage/components/Form';

const VaccinationPage = () => {
  localStorage.setItem('page', '3');
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
