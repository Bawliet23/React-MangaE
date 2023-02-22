import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
  


import Reader from './pages/Reader/Reader';
import {
  Route,
  Routes,
} from "react-router-dom";
import MangaDetails from './pages/MangaDetails/MangaDetails';
import Bookmark from './pages/Bookmark/Bookmark';
import { useState } from 'react';
import { BackToTop } from './components/BackToTop/BackToTop';
function App() {
  const [isScrolled, setIsScrolled] = useState(false)
window.onscroll=()=>{
  setIsScrolled(window.pageYOffset <= 100 ? false : true)
}
  return ( <>
  <Navbar / >
    <Routes>
  <Route exact  path="/" element={<Home />} />
  <Route path="/manga" element={<MangaDetails />} />
  <Route path="/reader" element={<Reader />} />
  <Route path="/bookmarks" element={<Bookmark />} />
  </Routes> 
  { isScrolled  ? <BackToTop /> : ""}
    <Footer />
    </>
  );
}

export default App;
