import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
  

import Reader from './pages/Reader/Reader';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
 
  return ( <>
  <Navbar / >
  <Route path="/" element={<Home />} />
  <Route path="/manga" element={<Reader />} />
    <Footer />
    </>
  );
}

export default App;
