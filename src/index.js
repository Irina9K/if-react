import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HotelDetails from './components/HotelDetails';
import Layout from './components/Layout';

window.React = React;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<App />} />
          <Route path={'hotels/:hotelId'} element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
);
