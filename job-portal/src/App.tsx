import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { Divider, MantineProvider } from '@mantine/core';
import { HomePage } from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindJobs } from './Pages/FindJobs';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { FindTalentPage } from './Pages/FindTalentPage';
import { TalentProfile } from './Pages/TalentProfile';
import { PostJobPage } from './Pages/PostJobPage';
import { JobDescriptionPage } from './Pages/JobDescriptionPage';
import { ApplyJobPage } from './Pages/ApplyJobPage';
import { CompanyPage } from './Pages/CompanyPage';
import { PostedJobPage } from './Pages/PostedJobPage';
import { JobHistoryPage } from './Pages/JobHistoryPage';
import { SignupPage } from './Pages/SignupPage';
import { ProfilePage } from './Pages/ProfilePage';

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
