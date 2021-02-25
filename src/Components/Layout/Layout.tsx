import React from 'react';
import './Layout.css';
import Footer from './Footer/Footer';
import AppRouter from '../AppRouter';

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="bg-gray-700">
      <div
        className={
          'max-w-5xl bg-gray-600 flex flex-col mx-auto content-container items-center border-custom-contentBlue border-l-8 border-r-8 relative'
        }
      >
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
