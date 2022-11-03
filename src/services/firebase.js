// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD362ZWET22h6xiDFUzmQqDXT8aRL-2irs',
  authDomain: 'auth-form-118a3.firebaseapp.com',
  projectId: 'auth-form-118a3',
  storageBucket: 'auth-form-118a3.appspot.com',
  messagingSenderId: '529177217405',
  appId: '1:529177217405:web:70cb738d784da946976414',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
