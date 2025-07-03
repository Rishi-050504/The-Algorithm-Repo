// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAlZJFwaYhY1wsPnj3HtVeyp7RRcfBhCLA",
  authDomain: "visitor-counter-26418.firebaseapp.com",
  projectId: "visitor-counter-26418",
  storageBucket: "visitor-counter-26418.firebasestorage.app",
  messagingSenderId: "736904574380",
  appId: "1:736904574380:web:9a965eecd9b464c6f7f609"
};

const app = initializeApp(firebaseConfig);

export default app;
