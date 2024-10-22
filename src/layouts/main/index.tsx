import React from 'react';
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import { Outlet } from 'react-router-dom';
import About from '../../components/About';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <Outlet />
    </>
  );
}
