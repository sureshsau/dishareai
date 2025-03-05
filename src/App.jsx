
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PageNotFound from './pages/PageNotFound'
import TermsPage from './pages/TermsPage'
import ContactPage from './pages/ContactPage'
import RefundPage from './pages/RefundPage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/terms-and-conditions' element={<TermsPage/>}/>
      <Route  path='/contact' element={<ContactPage/>}/>
      <Route path='/refund' element={<RefundPage/>}/>


      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App
