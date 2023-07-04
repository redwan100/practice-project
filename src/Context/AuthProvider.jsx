import { createContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, getIdTokenResult} from 'firebase/auth'
import { app } from "../firebase/firebase.config"
import axios from "axios"

const auth = getAuth(app)
export const ContextProvider = createContext()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('')


    const createUser = (email, password) => {
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
    setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }


    const userSignOut = () => {
      setLoading(getIdTokenResult)
      return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, (loggedUser)=>{
        setUser(loggedUser)
        if(loggedUser){
          axios.post('http://localhost:5000/jwt', {
            email:loggedUser.email
          })
          .then(res => {
            if(res.data){
              localStorage.setItem("token", res.data.token);
            }
          })
          .catch(err => {
            console.log(err);
          })
        }else{
          localStorage.removeItem('token')
        }
        setLoading(false)
     })

     return ()=> unSubscribe()
    },[])

    const userInfo ={
        user,
        createUser,
        userSignIn,
        userSignOut,
        loading,
    }
  return (
    <ContextProvider.Provider value={userInfo}>
        {children}
    </ContextProvider.Provider>
  )
}

export default AuthProvider