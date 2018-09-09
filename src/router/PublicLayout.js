import React from 'react';
import Header from '../header';

const PublicLayout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default PublicLayout;
