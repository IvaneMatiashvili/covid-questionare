import { Layout } from '@/components';
import { Form } from './components';
import { useRedirectToCurrentPage } from '@/hooks';
import '@/css/tips-page-animation.css';

const VaccinationPage = () => {
  useRedirectToCurrentPage();
  return (
    <Layout>
      <div className='w-[95rem] flex justify-between overflow-hidden opacity-animation'>
        <div>
          <p className='w-[28rem] font-arial font-normal text-base text-dark-100 mt-10'>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p className='w-[27rem] font-arial font-normal text-base text-dark-100 mt-10'>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <Form />
        </div>
        <img
          src='/assets/tips.png'
          className='object-top object-cover z-10 fixed top-[20%] left-1/2 h-[48rem] pb-20'
        />
        <img
          src='/assets/heart.png'
          className={`fixed left-[55%] top-1/4 tips-logo-from-left-animation`}
        />
      </div>
    </Layout>
  );
};

export default VaccinationPage;
