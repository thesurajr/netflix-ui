

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDa3t1BcdjNxistoEXIvNpCS9VcfC8fMOc",
  authDomain: "react-netflix-clone-89b9c.firebaseapp.com",
  projectId: "react-netflix-clone-89b9c",
  storageBucket: "react-netflix-clone-89b9c.appspot.com",
  messagingSenderId: "1034920245847",
  appId: "1:1034920245847:web:dcbdcfab1af68db1e8c112",
  measurementId: "G-96EGGN1L06"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);