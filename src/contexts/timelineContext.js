import { createContext, useState } from "react";

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);
  const [deletePost, setDeletePost] = useState({});
  const [editPost, setEditPost] = useState({});
  const [reload, setReload] = useState(true);
  const [repostModal, setRepostModal] = useState(false);

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
        repostModal,
        setRepostModal,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContext;
