import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { Divider, MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { FindJobs } from './Pages/FindJobs';
import { Footer } from './Components/Footer/Footer';
import { ApplyJobPage } from './Pages/ApplyJobPage';
import { CompanyPage } from './Pages/CompanyPage';
import { FindTalentPage } from './Pages/FindTalentPage';
import { HomePage } from './Pages/HomePage';
import { JobDescriptionPage } from './Pages/JobDescriptionPage';
import { JobHistoryPage } from './Pages/JobHistoryPage';
import { PostedJobPage } from './Pages/PostedJobPage';
import { PostJobPage } from './Pages/PostJobPage';
import { ProfilePage } from './Pages/ProfilePage';
import { SignupPage } from './Pages/SignupPage';
import { TalentProfile } from './Pages/TalentProfile';


function App() {

  return (
    <MantineProvider defaultColorScheme='dark'>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size="sm" mx="md" />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/find-talent' element={<FindTalentPage />} />
            <Route path='/company' element={<CompanyPage />} />
            <Route path='/posted-job' element={<PostedJobPage />} />
            <Route path='/jobs' element={<JobDescriptionPage />} />
            <Route path='/job-history' element={<JobHistoryPage />} />
            <Route path='/apply-jobs' element={<ApplyJobPage />} />
            <Route path='/post-job' element={<PostJobPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/talent-profile' element={<TalentProfile />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>)
}


export default App
