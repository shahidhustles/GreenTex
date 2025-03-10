import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../config/firebase";
import textiles from "../data/textiles";

export async function addDataToFirestore() {
  try {
    const batchPromises = textiles.map((textile) => {
      const collectionRef = collection(db, "textiles");
      addDoc(collectionRef, textile);
    });
    await Promise.all(batchPromises);
    console.log("All textiles added!");
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
}
// fetches the textiles
export async function fetchTextiles() {
  const textileCollectionRef = collection(db, "textiles");
  try {
    const data = await getDocs(textileCollectionRef);
    const textiles = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(textiles);
    return textiles;
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
}

export const fetchTextileById = async (textileId) => {
  const docRef = doc(db, "textiles", textileId);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function deleteAllTextiles() {
  const textileCollectionRef = collection(db, "textiles");
  try {
    const snapshot = await getDocs(textileCollectionRef);
    const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log("All textiles deleted successfully!");
  } catch (error) {
    console.error("Error deleting documents: ", error);
  }
}

//bookmark logic:
// normally we used to add a collection manually in firebase, but now we will be using setDoc for the same
// the only difference is then we had the written, now the data is depended on user.
// each document will be named after users uid (making it easier to fetch) and we will be using array union / remove to
// which automatically looks after duplicates adn makes sure its unique. And {merge: true} makes sure the array is
// immutable and we are not replacing the whole array.

export const addBookmark = async (userId, textileId) => {
  if (!userId || !textileId) {
    console.error("Missing userId or textileId", { userId, textileId });
    return false;
  }

  try {
    const userBookmarksRef = doc(db, "userBookmarks", userId);
    await setDoc(
      userBookmarksRef,
      {
        bookmarks: arrayUnion(textileId),
      },
      { merge: true }
    );
    console.log("Bookmark added successfully");
    return true;
  } catch (error) {
    console.error("Error adding bookmark:", error.message);
    return false;
  }
};

export const getBookmarks = async (userId) => {
  if (!userId) {
    console.error("Missing userId");
    return [];
  }

  try {
    const userBookmarksRef = doc(db, "userBookmarks", userId);
    const docSnap = await getDoc(userBookmarksRef);
    if (!docSnap.exists()) return [];

    const bookmarkIds = docSnap.data().bookmarks || [];

    // Fetch all textile documents in parallel
    const bookmarksPromises = bookmarkIds.map((id) => fetchTextileById(id));
    const bookmarks = await Promise.all(bookmarksPromises);

    // Filter out any null results
    return bookmarks.filter((bookmark) => bookmark !== null);
  } catch (error) {
    console.error("Error getting bookmarks:", error);
    return [];
  }
};
