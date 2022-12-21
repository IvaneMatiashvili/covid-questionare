import LandingPage from '@/pages/LangingPage/LandingPage';
import '@/index.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import IdentityPage from '@/pages/IdentityPage/IdentityPage';
import CovidQuestionnairePage from '@/pages/CovidQuestionnairePage/CovidQuestionnairePage';
import VaccinationPage from '@/pages/VaccinationPage/ VaccinationPage';
import TipsPage from '@/pages/TipsPage/TipsPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('page')) {
      localStorage.setItem('page', '0');
    }
  });
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/identity' element={<IdentityPage />} />
        <Route
          path='/covid-questionnaire'
          element={<CovidQuestionnairePage />}
        />
        <Route path='/vaccination' element={<VaccinationPage />} />
        <Route path='/tips' element={<TipsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
