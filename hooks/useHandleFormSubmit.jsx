import { useEffect, useState } from "react";


import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { checkValidData } from "../scripts/validate";
import { auth } from "../scripts/firebase";
import { router } from "expo-router";





const useHandleFormSubmit = (email,password,isSignInForm,name="testusername") =>{
    const dispatch = useDispatch();
    let [errorMsg , setErrorMsg] = useState(null);

  
    let handleSubmitForm = () =>{
      // let msg = isSignInForm ? checkValidData(email,password):  checkValidData(email,password);
      // setErrorMsg(msg);
      console.log(email);

      // if(msg){return}
      if(isSignInForm){
        setErrorMsg("");
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential)=>{router.replace("/(tabs)/home");})
          .catch((error) => {
            if (error.message.includes("auth/user-not-found")) {
              setErrorMsg("No user found with this email.");
            } else if (error.message.includes("auth/wrong-password")) {
              setErrorMsg("Incorrect password.");
            } else if (error.message.includes("auth/invalid-email")) {
              setErrorMsg("Invalid email address.");
            } else if (error.message.includes("auth/invalid-credential")) {
              setErrorMsg("Invalid credential.");
            } else if (error.message.includes("auth/too-many-requests")) {
              setErrorMsg("Access to this account has been temporarily disabled due to many failed login attempts.");
            } else {
            setErrorMsg("something went wrong");
            }
          });
      }else{
        setErrorMsg(null);
        //signup
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
          displayName: name, photoURL: ""
          })
          .then(() => {
          // Profile updated!
            const {uid,email,displayName} = auth.currentUser;
            // dispatch(addUser({uid,email,displayName}));
            router.replace("/(tabs)/home")
          })
          .catch((error) => {
            console.log(error)
      });

      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
        setErrorMsg("Email already in use.");
      } else if (error.message.includes("auth/invalid-email")) {
        setErrorMsg("Invalid email address.");
      } else if (error.message.includes("auth/weak-password")) {
        setErrorMsg("Weak password.");
      } else {
        setErrorMsg("An unknown error occurred.");
      }
    });
      }

  }

  return {handleSubmitForm,errorMsg};

}



export default useHandleFormSubmit;