// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu4IyPaEK__tJ0aX_IDT0e13ildHCArTQ",
  authDomain: "task-app-26a75.firebaseapp.com",
  projectId: "task-app-26a75",
  storageBucket: "task-app-26a75.firebasestorage.app",
  messagingSenderId: "231550165744",
  appId: "1:231550165744:web:fd8cec2b7b8463ac3e9835"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);

export const firebaseAuth = initializeAuth(Firebaseapp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});