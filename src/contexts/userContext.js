import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const persistedUserData = JSON.parse(localStorage.getItem("auth"));
  const [userData, setUserData] = useState(persistedUserData);

  function login(userData) {
    setUserData(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  }

  return (
    <UserContext.Provider value={{ userData, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
