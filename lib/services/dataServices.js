import { db } from "lib/firebase";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  getDoc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";

class DatabaseService {
  collection;

  constructor(collectionName) {
    this.collection = collection(db, collectionName);
  }

  getAll = async () => {
    const data = await getDocs(this.collection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  getDataByID = async (key, id) => {
    const q = query(this.collection, where(key, "==", id));

    const data = await getDocs(q);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };

  getOne = async (id) => {
    const docRef = doc(this.collection, id);
    const result = await getDoc(docRef);
    return { ...result.data(), id: id };
  };

  create = async function (data) {
    return await addDoc(this.collection, data);
  };

  update = async (id, data) => {
    const docRef = doc(this.collection, id);
    return updateDoc(docRef, data);
  };

  remove = async (id) => {
    return deleteDoc(doc(this.collection, id));
  };

  // getReference = async (documentReference) => {
  //   const res = await getDocs(this.collection);
  //   const data = res.data();

  //   if (data && documentReference.id) {
  //     data.uid = documentReference.id;
  //   }

  //   return data;
  // };
}

export const PostsDataService = new DatabaseService("posts");
export const CommentsDataService = new DatabaseService("comments");
