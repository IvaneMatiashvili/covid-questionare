import Layout from '@/components/Layout';
import Form from '@/pages/TipsPage/components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const VaccinationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('page') !== '4') {
      navigate(-1);
    }
  });
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
