import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw1P4lFBix2Rj6ErJOB5a5VOw8I9O6bP4",
  authDomain: "soloproject-b0c7c.firebaseapp.com",
  projectId: "soloproject-b0c7c",
  storageBucket: "soloproject-b0c7c.appspot.com",
  messagingSenderId: "951497539447",
  appId: "1:951497539447:web:1932ba8bf491c63d78ab72",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
