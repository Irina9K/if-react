import React from 'react';
import SectionHeaderTop from './SectionHeaderTop';
import SectionFooter from './SectionFooter';

export const Layout = ({ children }) => (
  <>
    <SectionHeaderTop />
    {children}
    <SectionFooter />
  </>
);

export default Layout;
