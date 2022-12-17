import LandingPage from '/src/pages/LangingPage/LandingPage.jsx';
import '/src/index.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '/src/pages/NotFoundPage/NotFoundPage';
import IdentityPage from '/src/pages/IdentityPage/IdentityPage';
import CovidQuestionnairePage from '/src/pages/CovidQuestionnairePage/CovidQuestionnairePage.jsx';
import VaccinationPage from '/src/pages/VaccinationPage/ VaccinationPage';
import TipsPage from '/src/pages/TipsPage/TipsPage.jsx';

function App() {
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
