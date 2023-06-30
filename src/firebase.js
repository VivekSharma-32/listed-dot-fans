import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQHmcL0sWY5lnd-7dV15uFi0QMxD6ip6k",
  authDomain: "react-fire-project-6e43a.firebaseapp.com",
  databaseURL: "https://react-fire-project-6e43a-default-rtdb.firebaseio.com",
  projectId: "react-fire-project-6e43a",
  storageBucket: "react-fire-project-6e43a.appspot.com",
  messagingSenderId: "839575957055",
  appId: "1:839575957055:web:9c5c62eec87e4fcc9e128a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
