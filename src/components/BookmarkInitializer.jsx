import { useEffect } from "react";
import { useData, useTextiles } from "../store/store";
import { getBookmarks } from "../utils/firebaseServices";

const BookmarkInitializer = () => {
  const user = useData((state) => state.user);
  const setBookmarkedTextiles = useTextiles(
    (state) => state.setBookmarkedTextiles
  );

  useEffect(() => {
    if (user?.uid) {
      const loadBookmarks = async () => {
        const bookmarks = await getBookmarks(user.uid);
        setBookmarkedTextiles(bookmarks);
      };
      loadBookmarks();
    } else {
      setBookmarkedTextiles([]);
    }
  }, [user, setBookmarkedTextiles]);

  return null;
};

export default BookmarkInitializer;
