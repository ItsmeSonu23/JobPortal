import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
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

function App() {

  return (
    <MantineProvider defaultColorScheme='dark'>
      <BrowserRouter>
      <Header/>
      <Divider size="sm" mx="md" />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs/>}/>
          <Route path='/find-talent' element={<FindTalentPage/>}/>
          <Route path='/jobs' element={<JobDescriptionPage/>}/>
          <Route path='/post-job' element={<PostJobPage/>}/>
          <Route path='/talent-profile' element={<TalentProfile/>}/>
          <Route path='*' element={<HomePage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </MantineProvider>)
}


export default App
