import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import { Auth } from 'pages/Auth';
import { Home } from 'pages/Home';
import { auth } from 'services/firebase';
const provider = new GoogleAuthProvider();

export const App = () => {
  const [user, setUser] = useState(null);

  function onSubmit({ email, password, name }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser({ email, name });
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function onGoogleClick() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser({ name: user.displayName, email: 'default@mai.com' });
      })
      .catch(error => {
        const errorCode = error.code;
      });
  }

  return (
    <div>
      {user ? (
        <Home userInfo={user} />
      ) : (
        <Auth onSubmit={onSubmit} onGoogleClick={onGoogleClick} />
      )}
    </div>
  );
};
