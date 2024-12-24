import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Events from './Events.jsx'
// import Navbar from "./Navbar.jsx"
// import Footer from "./Footer.jsx"
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/> */}
    <Events />
    {/* <Footer/> */}
  </StrictMode>,
)
