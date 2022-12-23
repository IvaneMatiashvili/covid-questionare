import { Layout } from '@/components'
import { Form } from './components'
import '@/css/covid-questionnaire-page-animation.css'

const CovidQuestionnairePage = () => {
  return (
    <>
      <Layout>
        <div className='w-[95rem] flex justify-between overflow-hidden opacity-animation'>
          <div>
            <Form />
          </div>
          <img
            src='/assets/covid-questionnaire.png'
            className='object-top object-cover z-10 h-[48rem]'
          />
          <img
            src='/assets/circle.png'
            className={`absolute left-1/2 top-[33%] covid-questionnaire-logo-from-${localStorage.getItem(
              'from'
            )}-animation`}
          />
        </div>
      </Layout>
    </>
  )
}

export default CovidQuestionnairePage
