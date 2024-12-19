import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { textiles } from "../data/textiles";

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
