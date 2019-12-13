import React from 'react';
import './styles/Layout.css';
import {Container} from 'react-grid-system';
const Layout = ({children}) => {
return <Container>{children}</Container>;
};

export default Layout;