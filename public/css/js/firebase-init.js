// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWKzWwCgfU1i3S2zli2uJZXBayvKEjgZw",
  authDomain: "area-aed48.firebaseapp.com",
  projectId: "area-aed48",
  storageBucket: "area-aed48.firebasestorage.app",
  messagingSenderId: "339315377211",
  appId: "1:339315377211:web:e1936b4a0a8fbecc35881e",
  measurementId: "G-DPKT0S4SBQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
