import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import Sidebar from './components/Sidebar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar title="TextUtils" aboutText="About Us"/> 
   {/* <Sidebar/> */}
   <h1>
    <center><b>INVESTOPEDIA</b></center>
   </h1>
   <h4>DASHBOARD</h4>
   <Cards/>
   <div className="container ">
    {<center><TextForm heading="Enter the text to analyze below"/></center> }
    {/* <About/>  */}
   </div>
   <Footer/>
   </>
  );
}

export default App;