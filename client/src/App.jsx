import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './Footer'
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
      </Routes>
    </div>
  )
}

export default App
