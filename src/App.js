/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */

import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Home from './pages/home';
import UserContext from './contexts/userContext';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    token: '',
    profilePic: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
