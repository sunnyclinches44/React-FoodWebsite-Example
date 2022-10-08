import { useState, useEffect } from "react";

import { projectStorage, projectFireStore, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //storage reference
    const storageRef = projectStorage.ref(file.name);

    //firestore reference
    const collectionRef = projectFireStore.collection("images");

    /** Put function on method has three parameters - snapshot upload percentage, error, 
        and aysnc function to get the URL */
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        collectionRef.add({url, createdAt })
        setUrl(url);
      }
    );
  }, [file]);

  return {progress, error, url};
}

export default useStorage;
