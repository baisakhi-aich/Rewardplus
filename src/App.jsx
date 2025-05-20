import React from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Price from './Component/Price/Price'
import Home from './Component/Home/Home'
import Steps from './Component/Steps/Steps'
import Vdopage from './Component/Vdopage/Vdopage'
const App = () => {
  return (
    <div>
    <Header/>
 <Home/>
<Steps/>
<Vdopage/>
    <Price/>
    <Footer/>
    </div>
  )
}

export default App
