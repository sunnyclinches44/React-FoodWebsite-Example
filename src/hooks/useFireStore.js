import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

const useFireStore = (collection, category) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .where("category", "==", "Vegetarian")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection, category]);

  return { docs };
};

export default useFireStore;
