import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
