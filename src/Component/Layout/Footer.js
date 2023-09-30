import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaYoutube, FaSpotify, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'skyblue', padding: '10px 0', textAlign: 'center' ,fontSize:'50px'}}>
      <Container>
        <Row>
          <Col xs={12}>
            <p style={{ color: 'white', fontWeight: 'bold' }}>The Generic</p>
          </Col>
        </Row>
        <Row className="social-icons" style={{marginTop:'10px'}}>
          <Col xs={4}>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'red', textDecoration: 'none', fontSize: '35px' }}>
              <FaYoutube />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" style={{ color: 'green', textDecoration: 'none', fontSize: '35px' }}>
              <FaSpotify />
            </a>
          </Col>
          <Col xs={4}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none', fontSize: '35px' }}>
              <FaFacebook />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;