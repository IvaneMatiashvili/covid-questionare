import Layout from '/src/components/Layout.jsx';
import Form from '/src/pages/TipsPage/components/Form';

const VaccinationPage = () => {
  localStorage.setItem('page', '4');
  return (
    <>
      <Layout>
        <div className='w-[95rem] flex justify-between overflow-hidden'>
          <div>
            <p className='w-[28rem] font-normal text-base text-dark-100 mt-[2.5rem]'>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <p className='w-[27rem] font-normal text-base text-dark-100 mt-[2.5rem]'>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
            <Form />
          </div>
          <img
            src='/assets/tips.png'
            className='object-top object-cover h-[48rem]'
          />
        </div>
      </Layout>
    </>
  );
};

export default VaccinationPage;
