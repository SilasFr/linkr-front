import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Timeline from "./pages/timeline";
import Home from "./pages/home";
import { UserProvider } from "./contexts/userContext";
import TimelineContext, { TimelineProvider } from "./contexts/timelineContext";

function App() {
  return (
    <UserProvider>
      <TimelineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/timeline" element={<Home />} />
            {/* <Route path="/hashtag/:hashtag" element={<HashtagPage />} /> */}
          </Routes>
        </BrowserRouter>
      </TimelineProvider>
    </UserProvider>
  );
}

export default App;
