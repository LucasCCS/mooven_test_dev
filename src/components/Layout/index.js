import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import './styles/Layout.css';
import Navbar from '../Navbar';
const Layout = ({children, size}) => {
return (
    <Container>
      <Row className="mv-layout-wrapper">
        <Col lg={size} >
          <Navbar />
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;