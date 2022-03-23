import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

import UserContext from "./contexts/userContext";
import { useState } from "react";
import Timeline from "./pages/timeline";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    token: "",
    profilePic: "",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
