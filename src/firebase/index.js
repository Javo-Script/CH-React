// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
//import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOJFS-hx9MqljN1y-D5Azp6qXAi8VJZcA",
  authDomain: "ch-react-ecommerce.firebaseapp.com",
  projectId: "ch-react-ecommerce",
  storageBucket: "ch-react-ecommerce.appspot.com",
  messagingSenderId: "759099121554",
  appId: "1:759099121554:web:dc0b5e087b489ea974ab4b",
  measurementId: "G-8F4GY3BF12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const getData = () => getFirestore(app);