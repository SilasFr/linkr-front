import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";
import UserPage from "./pages/userPage";
import { UserProvider } from "./contexts/userContext";
import { TimelineProvider } from "./contexts/timelineContext";
import Update from "./pages/timeline/updateRoutine";

function App() {
  return (
    <UserProvider>
      <TimelineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/timeline" element={<Home target={"timeline"} />} />
            <Route
              path="/hashtag/:hashtag"
              element={<Home target={"hashtag"} />}
            />
<<<<<<< HEAD
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/count" element={<Update />} />
=======
            <Route path="/user/:id" element={<Home target={"user"} />} />
>>>>>>> main
          </Routes>
        </BrowserRouter>
      </TimelineProvider>
    </UserProvider>
  );
}

export default App;
