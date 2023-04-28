import React from 'react'
import '../Cards.css'
import {FcAbout} from "react-icons/fc";
import { FcBusinessman ,FcAddDatabase, FcBullish} from "react-icons/fc";
import Footer from './Footer'
import TextForm from './TextForm';

export default function Cards() {
    let myStyle={
        color:'black',
        backgroundColor:'Lavender',
        padding: '20px',
        margin: '45px',
        top: '20px',
        height: '650px',
      }
      let mStyle={
        color:'black',
        backgroundColor:'Lavender',
        padding: '5px',
        margin: '8px',
        top: '0px',
        height: '200px'
      }
  return (
    <>
     <h1>
    <center><b>INVESTOPEDIA</b></center>
   </h1>
   <h4>DASHBOARD</h4>
    <div className="row">
  <div className="col-sm-3 " >
    <div className="card" style={mStyle}>
      <div className="card-body">
        <div className="container" style={{fontSize:40}}>
        <h5 className="card-title">BUDGET </h5>
         <FcAbout/>
         </div>
        <p className="card-text" style={{fontSize:30}}><b>$24k</b></p>
        <a href="#" className="btn btn-dark">More Information</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3 ">
   <div className="card"style={mStyle}>
      <div className="card-body">
      <div className="container" style={{fontSize:50}}>
        <h5 className="card-title">TOTAL CUSTOMERS</h5>
        <FcBusinessman/>
      </div>
        <p className="card-text" style={{fontSize:30}}><b>$1.6k</b></p>
        <a href="#" className="btn btn-dark">More Information</a>
      </div>

    </div>
    </div>
    <div className="col-sm-3 ">
   <div className="card"style={mStyle}>
      <div className="card-body">
      <div className="container" style={{fontSize:50}}>
        <h5 className="card-title">TASK PROGRESS</h5>
        <FcAddDatabase/>
      </div>
        <p className="card-text" style={{fontSize:30}}><b>75.5%</b></p>
        <a href="#" className="btn btn-dark">Go somewhere</a>
      </div>
    </div>
    </div>
    <div className="col-sm-3 ">
   <div className="card"style={mStyle}>
      <div className="card-body">
      <div className="container" style={{fontSize:50}}>
        <h5 className="card-title">TOTAL PROFIT</h5>
        <FcBullish/>
      </div>
        <p className="card-text"style={{fontSize:30}}><b>$15k</b></p>
        <a href="#" className="btn btn-dark">Go somewhere</a>
      </div>
    </div>
    </div>

</div>


<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0" >
    <div className="card" style={myStyle}>
    <img src="https://tse4.mm.bing.net/th/id/OIP.qK_AtGvjcuiOffUR7FzUNQHaF1?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">Sources of investment</h5>
        <p className="card-text">Content is depicted in the above pie chart</p>
        <a href="#" className="btn btn-dark">Complete Information</a>
      </div>
    </div>
  </div>
<div className="col-sm-6 ">
   <div className="card"style={myStyle}>
   <img src="https://tse1.mm.bing.net/th/id/OIP.4y5MivSHQD8thw3xjTexBwHaEl?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-dark">Complete Information</a>
      </div>
    </div>
</div>
</div>
<div className="container ">
    {<center><TextForm heading="Enter the text to analyze below"/></center> }
   </div>
<Footer/>
    </>
  )
}
