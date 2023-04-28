import '../Sidebar.css';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import PopupForm from './PopupForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Sidebar({handleclick}) {
  const [value,setvalue]=useState("hello");
   const handlechange =()=>{
    setvalue("hi");
    console.log(value);
   }
  return (
    <>
    <Menu>
      <li>
      <a className="menu-item" href="/">
        Overview</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Customers</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Companies</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Account</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Settings</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Login</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Register</a>
      </li>
      <li>
      <a className="menu-item" href="/">
        Error</a>
      </li>
      <div >
    {/* <Link to ="/tracker" >Tracker</Link> */}
    {/* <span onclick={()=>handlechange()}>Tracker</span>
      </div> */}
      <button onClick={()=>handleclick()} className='n1'>Tracker</button>
      </div>
      {/* <div className="newclass">
        <PopupForm/>
      </div> */}
    </Menu>
    </>
  )
}

export default Sidebar;
