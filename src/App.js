import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
// import Sidebar from './components/Sidebar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import { Modal } from 'bootstrap';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newpage from './components/Newpage';
import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
//import {BrowserRouter as Router,Routers,Switch,Route,Redirect} from "react-router-dom";
function App() {
  const [openModal, setOpenModal] =useState(false);
  const[pageopen,setPageOpen]=useState(true);
  const handleclick=()=>{
    setPageOpen(!pageopen);
  }
  return (
   <>
   {/* <BrowserRouter> */}
   
   <Navbar title="TextUtils" aboutText="About Us" handleclick={handleclick}/> 
    {pageopen ? <Cards/> : <Newpage/>}
   
   {/* <Routes>
    <Route path="/" element={<Cards/>}   />
    <Route path="/tracker" element={<Newpage />}  />
   </Routes> */}
   {/* </BrowserRouter> */}

   {/* <Routers>
    <Route path="/components/About" component={About}></Route>
   </Routers> */}
   {/* <Sidebar/> */}
   {/* <h1>
    <center><b>INVESTOPEDIA</b></center>
   </h1>
   <h4>DASHBOARD</h4>
   <Cards/>
   <div className="container ">
    {<center><TextForm heading="Enter the text to analyze below"/></center> } */}
    {/* <About/>  */}
   {/* </div>
   <div className="newclass" >
    <span onClick={ () => setOpenModal(true)} style={{fontSize:40}}>Tracker</span>
        {openModal&& <PopupForm/>}
      </div>
   <Footer/> */}
   </>
  );
}

// function Newcomp() {
//   const[pageopen,setPageOpen]=useState(true);
//   return(
//   <>
//    {pageopen ?<Cards/>:<Newpage/>}
//    </>
//   )
// }

export default App;