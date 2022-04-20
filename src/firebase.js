//firebase v8
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCiM8MXobYQ4U353ep2-C3AwRK0yQ48P2Y",
    authDomain: "whatsapp-clone-fdf1f.firebaseapp.com",
    projectId: "whatsapp-clone-fdf1f",
    storageBucket: "whatsapp-clone-fdf1f.appspot.com",
    messagingSenderId: "306884902499",
    appId: "1:306884902499:web:11ff77d1a7382e7a55c256"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
//for DB connection
const db = firebaseApp.firestore();

//for enabled authentication
const auth = firebase.auth();

//here provider is google, bcz we use google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export {auth, provider};









//firebase v9

// import { initializeApp } from 'firebase/app';
// import { getFirestore,collection , getDocs} from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCiM8MXobYQ4U353ep2-C3AwRK0yQ48P2Y",
//     authDomain: "whatsapp-clone-fdf1f.firebaseapp.com",
//     projectId: "whatsapp-clone-fdf1f",
//     storageBucket: "whatsapp-clone-fdf1f.appspot.com",
//     messagingSenderId: "306884902499",
//     appId: "1:306884902499:web:11ff77d1a7382e7a55c256"
//   };

// //this special line code connects everything
// initializeApp(firebaseConfig);

// // this is for data base connection. here firestore use to fetch the database data
// const db = getFirestore();

// // const colref = collection(db, 'rooms');

// // getDocs(colref)
// //  .then((snapshot)=>{
// //   //  console.log(snapshot.docs)
// //   let rooms = [];
// //   snapshot.docs.forEach((doc)=>{
// //     rooms.push({...doc.data(), id: doc.id, })
// //   })
// //  })
// //  .catch(err=>{
// //    console.log(err.message)
// //  })


// export default db;

