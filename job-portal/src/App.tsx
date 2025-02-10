import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { HomePage } from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>)
}


export default App
