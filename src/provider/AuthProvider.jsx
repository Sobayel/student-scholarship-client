import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()
  
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
  
    const logOut = async () => {
      setLoading(true)
      return signOut(auth)
    }
  
    const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
    }
  
    // onAuthStateChange
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log(currentUser)
        if(currentUser){
          const userInfo = {email : currentUser.email}
          axiosPublic.post('/jwt',userInfo)
          .then(res => {
            if(res.data.token){
              localStorage.setItem('access-token',res.data.token);
              setLoading(false)
              console.log(res.data.token)
            }
          })
        }else{
            localStorage.removeItem('access-token')
            // setUser(null)
              setLoading(false)
        }
      })
      return () => {
         unsubscribe()
      }
    }, [axiosPublic])
  
    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      googleSignIn,
      logOut,
      updateUserProfile,
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;