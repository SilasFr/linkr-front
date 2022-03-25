import { createContext, useState } from "react";

const TimelineContext = createContext();

export function UserProvider({ children }) {
  const [timeline, setTimeline] = useState(false);

  return (
    <TimelineContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContext;
