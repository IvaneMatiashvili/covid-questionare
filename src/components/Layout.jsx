import RedberrySvg from '@/components/icons/RedberrySvg';
import IdentityPageNumberSvg from '@/components/icons/IdentityPageNumberSvg';
import CovidQuestionnairePageSvg from '@/components/icons/CovidQuestionnairePageSvg';
import VaccinationPageNumberSvg from '@/components/icons/VaccinationPageNumberSvg';
import TipsPageNumberSvg from '@/components/icons/TipsPageNumberSvg';

const Layout = (props) => {
  let currentPageSvg;
  let currentPageNumber = localStorage.getItem('page');
  if (currentPageNumber === '1') {
    currentPageSvg = <IdentityPageNumberSvg />;
  } else if (currentPageNumber === '2') {
    currentPageSvg = <CovidQuestionnairePageSvg />;
  } else if (currentPageNumber === '3') {
    currentPageSvg = <VaccinationPageNumberSvg />;
  } else {
    currentPageSvg = <TipsPageNumberSvg />;
  }
  return (
    <div className='min-w-screen min-h-screen bg-soft-brown'>
      <header className='h-[7.5rem] flex items-end'>
        <div className='w-[95rem] ml-[12.5rem] flex justify-between'>
          <RedberrySvg />
          {currentPageSvg}
        </div>
      </header>
      <div className='w-[95rem] h-[1px] ml-[12.5rem] mt-[1.5rem] bg-dark-100'></div>
      <div className='w-[95rem] ml-[12.5rem]'>{props.children}</div>
    </div>
  );
};

export default Layout;
