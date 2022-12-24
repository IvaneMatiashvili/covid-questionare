import { Layout } from '@/components'
import '@/pages/IdentityPage/identity-page-animatiom.css'
import { Form } from './components'

const IdentityPage = () => {
  return (
    <Layout>
      <div className='w-[95rem] flex justify-between opacity-animation'>
        <div>
          <Form />
          <div className='w-[14.8rem] mt-40 h-[1px] bg-dark-100'></div>
          <p className='mt-5 font-arial text-soft-gray font-normal text-base'>
            *-ით მონიშნული ველების შევსება
          </p>
          <p className='text-soft-gray font-arial font-normal text-base'>
            სავალდებულოა
          </p>
        </div>
        <img
          src='/assets/identity.png'
          className='object-top object-cover h-[50rem] z-10 relative bottom-10'
          alt='identity'
        />
        <img
          src='/assets/rectangle.png'
          className='h-16 w-[40rem] absolute left-1/2 top-1/3 identity-logo-left-animation'
          alt='rectangle'
        />
      </div>
    </Layout>
  )
}

export default IdentityPage
