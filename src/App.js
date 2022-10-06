import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionHomes from './components/SectionHomes';
import Form from './components/Form';
import { AuthContext } from './context/context';
import Layout from './components/Layout';
import HotelDetails from './components/HotelDetails';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path={'/'}
              element={
                <>
                  <Form /> <SectionHomes />
                </>
              }
            />
            <Route path={'hotels/:hotelId'} element={<HotelDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
