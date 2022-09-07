import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

//saving item item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "plantItems", `${Date.now()}`), data, {
    merge: true,
  });
};

//get all food items
export const getAllplantItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "plantItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
