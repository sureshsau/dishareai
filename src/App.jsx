
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PageNotFound from './pages/PageNotFound'
import TermsPage from './pages/TermsPage'
import LoanPage from './pages/LoanPage'
import ContactPage from './pages/ContactPage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/terms-and-conditions' element={<TermsPage/>}/>
    <Route path='/loans' element={<LoanPage/>}/>
    <Route  path='/contact' element={<ContactPage/>}/>


      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App
