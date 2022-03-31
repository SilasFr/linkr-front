import { createContext, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);
  const [deletePost, setDeletePost] = useState({});
  const [editPost, setEditPost] = useState({});
  const [reload, setReload] = useState(true);

  return (
    <TimelineContext.Provider
      value={{
        timeline,
        setTimeline,
        deletePost,
        setDeletePost,
        editPost,
        setEditPost,
        reload,
        setReload,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContext;
