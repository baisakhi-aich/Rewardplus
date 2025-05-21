import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Price from './Component/Price/Price'
import Home from './Component/Home/Home'
import Steps from './Component/Steps/Steps'
import Vdopage from './Component/Vdopage/Vdopage'
import Download from './Component/Download/Download'
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy'
import Contact from './Component/Footer/Contact/Contact'
import Terms from './Component/Footer/Terms/Terms'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Steps />
            <Vdopage />
            <Price />
          </>
        } />
        <Route path="/download" element={<Download />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/contact"  element={<Contact/>}/>
        <Route path ="/user"    element={<Terms/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
