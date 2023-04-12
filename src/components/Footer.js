import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer.css';

function Footer() {
  return (
    <footer className='footer_bg'>
      <Container>
        <Row >
          <Col className='col'>
            <h4>About Us</h4>
            <ul >
              <li><a href="#" className='li_color'>Mission</a></li>
              <li><a href="#" className='li_color'>Team</a></li>
              <li><a href="#" className='li_color'>Careers</a></li>
            </ul>
          </Col>
          <Col className='col'>
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#" className='li_color'>Email</a></li>
              <li><a href="#" className='li_color'>Phone</a></li>
              <li><a href="#" className='li_color'>Address</a></li>
            </ul>
          </Col>
          <Col className='col'>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#" className='li_color'>Facebook</a></li>
              <li><a href="#" className='li_color'>Twitter</a></li>
              <li><a href="#" className='li_color'>Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='li_color'>&copy; 2023 My Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
