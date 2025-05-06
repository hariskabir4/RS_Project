import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <Navbar />
            <Footer />
          </>
        } />
        <Route path='/services' element={
          <>
            <Navbar />
            <Footer />
          </>
        } />
        <Route path='/contact' element={
          <>
            <Navbar />
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
            <Signup />
            {/* <Footer /> */}
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
