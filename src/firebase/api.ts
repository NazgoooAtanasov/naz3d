import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "~/env";

initializeApp({
  apiKey: env.API_KEY,
  authDomain: env.AUTHDOMAIN,
  projectId: env.PROJECTID,
  storageBucket: env.STORAGEBUCKET,
  messagingSenderId: env.MESSAGINGSENDERID,
  appId: env.APPID,
});
export const db = getFirestore();
