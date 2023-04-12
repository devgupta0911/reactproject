import '../Sidebar.css';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function Sidebar() {
  return (
    <Menu>
      <li>
      <span><a className="menu-item" href="/">
        Overview</a></span>
      </li>
      <li>
      <span><a className="menu-item" href="/salads">
        Customers</a></span>
      </li>
      <li>
      <span><a className="menu-item" href="/pizzas">
        Companies</a></span>
      </li>
      <li>
      <span><a className="menu-item" href="/desserts">
        Account</a> </span>
      </li>
      <li>
      <span><a className="menu-item" href="/desserts">
        Settings</a> </span>
      </li>
      <li>
      <span><a className="menu-item" href="/desserts">
        Login</a> </span>
      </li>
      <li>
      <span><a className="menu-item" href="/desserts">
        Register</a> </span>
      </li>
      <li>
      <span><a className="menu-item" href="/desserts">
        Error</a> </span>
      </li>
    </Menu>
  )
}

export default Sidebar;
