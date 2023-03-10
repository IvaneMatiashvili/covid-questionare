import { Layout } from '@/components'
import { Form } from './components'
import './vaccination-page-animation.css'

const VaccinationPage = () => {
  return (
    <Layout>
      <div className='w-[95rem] flex justify-between overflow-hidden opacity-animation'>
        <div>
          <Form />
        </div>
        <img
          src='/assets/vaccination.png'
          className='object-top absolute left-1/2 top-[20%] z-10 object-cover h-[45rem]'
          alt='vaccination'
        />
        <img
          src='/assets/star.png'
          className={`absolute left-[51.5%] top-[18%] vaccination-logo-from-${localStorage.getItem(
            'from'
          )}-animation`}
          alt='star'
        />
      </div>
    </Layout>
  )
}

export default VaccinationPage
