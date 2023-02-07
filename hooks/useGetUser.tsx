import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import { User } from "firebase/auth";
export default function useGetUser(currentUser?: User, navigation?) {
  const [user, setUser] = useState({
    email: currentUser?.email,
    displayName: currentUser?.displayName,
    photoURL: currentUser?.photoURL,
  });

  useEffect(() => {
    const findUser = async () => {
      initializeApp(firebaseConfig);
      const db = getFirestore();
      const q = query(
        collection(db, "users"),
        where("belongTo", "==", currentUser?.uid)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs[0]) {
        setUser(querySnapshot.docs[0].data());
      }
    };
    findUser();
  }, [navigation]);

  return { user, setUser };
}
