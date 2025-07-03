import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Screens/Home';
import NoPage from '../Screens/NoPage';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Redux from '../Screens/ReduxExample';

function Navigator() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Redux" element={<Redux />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  )
}
export default Navigator