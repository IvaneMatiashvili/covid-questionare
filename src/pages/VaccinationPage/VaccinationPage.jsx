import { Layout } from '@/components'
import { Form } from './components'
import '@/css/vaccination-page-animation.css'

const VaccinationPage = () => {
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
          className={`absolute left-1/2 top-[12%] vaccination-logo-from-${localStorage.getItem(
            'from'
          )}-animation`}
        />
      </div>
    </Layout>
  )
}

export default VaccinationPage
