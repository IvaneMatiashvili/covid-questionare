import '@/index.css'
import { Route, Routes } from 'react-router-dom'
import {
  LandingPage,
  NotFoundPage,
  IdentityPage,
  CovidQuestionnairePage,
  VaccinationPage,
  TipsPage,
  ThankYouPage,
} from '@/pages'

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
        <Route path='/thank-you' element={<ThankYouPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
