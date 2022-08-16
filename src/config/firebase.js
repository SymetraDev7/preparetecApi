import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBv5p7CSXCwBkq2I6DCjSy0nZrDKgUPsj0",
  authDomain: "preparetec-api.firebaseapp.com",
  projectId: "preparetec-api",
  storageBucket: "preparetec-api.appspot.com",
  messagingSenderId: "676397684205",
  appId: "1:676397684205:web:2ba34fff6637084797c3e4",
  measurementId: "G-0D04Y6850X"
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

const storageRef = ref(storage);