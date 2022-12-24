import './thank-you-page-animation.css'
import { useRedirectToStartPage } from './components'

const ThankYouPage = () => {
  useRedirectToStartPage()
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center bg-dark-100 opacity-animation'>
      <div className='w-[30rem]'>
        <img
          src='/assets/left-star.png'
          className='left-star relative left-[10%] mb-6'
          alt='star'
        />
      </div>
      <div>
        <img src='/assets/thank-you.png' alt='thank you' />
      </div>
      <div className='w-[30rem]'>
        <img
          src='/assets/right-star.png'
          className='right-star relative mt-4 left-[80%]'
          alt='star'
        />
      </div>
    </div>
  )
}

export default ThankYouPage
