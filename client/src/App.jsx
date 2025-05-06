import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Services from './components/Services'
import Home from './components/Home'
import ViewReports from './components/ViewReports'
import Upload from './components/Upload'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path='/services' element={
          <>
            <Navbar />
            <Services />
            <Footer />
          </>
        } />
        <Route path='/contact' element={
          <>
            <Navbar />
            <ContactUs />
            <Footer />
          </>
        } />
        <Route path='/login' element={
          <>
            <Navbar />
            <Login />
            {/* <Footer /> */}
          </>
        } />
        <Route path='/signup' element={
          <>
            <Navbar />
            <Signup />
            {/* <Footer /> */}
          </>
        } />
        <Route path='/veiw reports' element={
          <>
            <Navbar />
            <ViewReports />
            <Footer />
          </>
        } />
        <Route path='/upload' element={
          <>
            <Navbar />
            <Upload/>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
