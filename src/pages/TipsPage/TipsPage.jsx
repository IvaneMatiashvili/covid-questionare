import { Layout } from '@/components'
import { Form } from './components'
import '@/css/tips-page-animation.css'

const VaccinationPage = () => {
  return (
    <Layout>
      <div className='w-[89.5vw] flex justify-between overflow-hidden opacity-animation'>
        <div className='max-h-[85vh] w-[89.5vw] overflow-x-hidden tips-overflow z-30'>
          <p className='w-[35rem] font-arial font-normal text-xl text-dark-100 mt-10'>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p className='w-[36rem] font-arial font-normal text-xl text-dark-100 mt-10'>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <Form />
        </div>
        <img
          src='/assets/tips.png'
          className='object-top object-cover z-10 absolute top-[20%] left-1/2 h-[48rem] pb-20'
        />
        <img
          src='/assets/heart.png'
          className={`absolute left-[55%] top-1/4 tips-logo-from-left-animation`}
        />
      </div>
    </Layout>
  )
}

export default VaccinationPage
