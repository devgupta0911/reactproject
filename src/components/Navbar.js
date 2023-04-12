import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'

export default function Navbar(props) {
  let myStyle={
    padding: 15,
  }
  return (    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><Sidebar/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{fontSize:20}}>{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{fontSize:20}}>Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{fontSize:20}}>{props.aboutText}</a>
        </li>
      </ul>
      <span className="navbar-text" style={{fontSize:20}}>
        <b>User Portal </b>
      </span>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:'Set title here',
    aboutText: 'About textUtils'
}
