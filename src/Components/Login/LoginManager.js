import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Configs/FirebaseConfig";

// To prevent Firebase Common Error : Default Somthing?:
export const initializeAppLoginFrameWork = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

// Create new User:
export const newAccountCreate = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      setUserToken();
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

// Old User Login in:
export const oldUserSignIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        displayName: displayName,
        email: email,
      };
      setUserToken();
      return signedInUser;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
// Google sign In:
export const handlegoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */

      const { displayName, email } = result.user;
      const signedInUser = {
        displayName: displayName,
        email: email,
      };
      setUserToken();
      return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Store Token:
const setUserToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {});
};

// Update user name:
const updateUserName = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {})
    .catch(function (error) {
      console.log(error);
    });
};
