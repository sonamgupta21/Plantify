import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANSme1xjaWgc9OUFZEEPFsGutvQ-IU_Us",
  authDomain: "plant-shop-b9bd0.firebaseapp.com",
  databaseURL: "https://plant-shop-b9bd0-default-rtdb.firebaseio.com",
  projectId: "plant-shop-b9bd0",
  storageBucket: "plant-shop-b9bd0.appspot.com",
  messagingSenderId: "429010509886",
  appId: "1:429010509886:web:c0b4030246f9ccdeb7716f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
