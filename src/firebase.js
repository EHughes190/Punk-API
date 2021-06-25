import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7WIcNzGZEMej48a1CQfYVGKq72CA46Mw",
  authDomain: "punk-api-c310d.firebaseapp.com",
  projectId: "punk-api-c310d",
  storageBucket: "punk-api-c310d.appspot.com",
  messagingSenderId: "704927040871",
  appId: "1:704927040871:web:e1f0df3c2225205bad1bc2",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
