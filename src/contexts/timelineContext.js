import { createContext, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(false);
  const [deletePost, setDeletePost] = useState({});
  const [editPost, setEditPost] = useState({});

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        setTimeline,
        deletePost,
        setDeletePost,
        editPost,
        setEditPost,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContext;
