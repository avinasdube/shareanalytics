import React, { ReactNode } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
