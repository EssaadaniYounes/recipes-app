import firebaseConfig from "../firebase";
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

export default function useGetAuth(): Auth {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return auth;
}
