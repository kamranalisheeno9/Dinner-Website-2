import { useState } from 'react'
import './App.css'
import HomePage from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ChefsMenu from './Pages/ChefsMenu';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Pricing from './Pages/Pricing';
import Terms_Conditions from './Pages/TermsConditions';
import FAQs from './Pages/Faqs';
import Safety from './Pages/Safety';
import About from './Pages/About';
import Events from './Pages/Events';
import Reschedule from './Pages/Reschedule';
import Sitemap from './Pages/Sitemap';
import Blog from './Pages/Blog';
import {GlobalData} from './Context/GlobalData'

const App=()=> {
const Url=import.meta.env.VITE_REACT_APP_URL;
const [lang,setLang]=useState("en")
  return (
    <GlobalData.Provider value={{lang,setLang,Url}}>
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route  path="our-menu" element={<ChefsMenu />}></Route>
      <Route  path="pricing" element={<Pricing />}></Route>
      <Route  path="gallery" element={<Gallery />}></Route>
      <Route  path="contact" element={<Contact />}></Route>
      <Route  path="about-us" element={<About />}></Route>
      <Route  path="terms-conditions" element={<Terms_Conditions />}></Route>
      <Route  path="faqs" element={<FAQs />}></Route>
      <Route  path="safety-security" element={<Safety />}></Route>
      <Route  path="events" element={<Events />}></Route>
      <Route  path="reschedule" element={< Reschedule />}></Route>
      <Route  path="sitemap" element={< Sitemap />}></Route>
      <Route  path="blog" element={<Blog />}></Route>
    </Routes>
     
    </BrowserRouter>
    </GlobalData.Provider>
    )
}

export default App
