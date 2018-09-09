import React from 'react';

const PrivateLayout = ({ children }) => (
  <div>
 Header
    <div>{children}</div>
  </div>
);

export default PrivateLayout;
