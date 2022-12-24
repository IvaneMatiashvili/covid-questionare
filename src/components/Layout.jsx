import {
  RedberrySvg,
  IdentityPageNumberSvg,
  CovidQuestionnairePageSvg,
  VaccinationPageNumberSvg,
  TipsPageNumberSvg,
} from '@/components'

const Layout = (props) => {
  let currentPageSvg
  let currentPage = localStorage.getItem('page')
  switch (currentPage) {
    case '/identity':
      currentPageSvg = <IdentityPageNumberSvg />
      break
    case '/covid-questionnaire':
      currentPageSvg = <CovidQuestionnairePageSvg />
      break
    case '/vaccination':
      currentPageSvg = <VaccinationPageNumberSvg />
      break
    default:
      currentPageSvg = <TipsPageNumberSvg />
  }
  return (
    <div className='min-w-screen min-h-screen bg-soft-brown'>
      <header className='h-[7.5rem] flex items-end'>
        <div className='w-[95rem] ml-[12.5rem] flex justify-between'>
          <RedberrySvg />
          {currentPageSvg}
        </div>
      </header>
      <div className='w-[95rem] h-[1px] ml-[12.5rem] mt-6 bg-dark-100'></div>
      <div className='w-[95rem] ml-[12.5rem]'>{props.children}</div>
    </div>
  )
}

export default Layout
