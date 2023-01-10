import React, {useState} from "react";
import {Jumbotron} from "react-bootstrap"
import LoginForm  from "../../components/LoginForm";
import ResetForm  from "../../components/ResetForm";
import SignupForm from "../../components/SignupForm";
import {db, auth} from "../../firebaseconfig";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {collection, addDoc} from "firebase/firestore";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
// import {getDocs} from "firebase/firestore";
import "./entry.css";


const Entry = () => {
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const [userType, setUserType] = useState("");

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    switch(name){
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'userType':
        setUserType(value);
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!email || !password)
    {
      return alert("Fill up all the field!");
    }
    // call API to submit the form
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
  };
  

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if(!email)
    {
      return alert("Please enter the Email!");
    }
    // call API to submit the form
    console.log(email);
  };
  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };


  const handleOnSignupSubmit = (e) => {
    e.preventDefault();

    if(!email || !password || !name || !confirmPassword || !userType)
    {
      return alert("Fill up all the fields!");
    }
    if(confirmPassword!== password)
    {
      return alert("Password doesn't match");
    }

    const userRegistration = async (name, email, password, userType) => {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) =>{
          try {
            const newUser = userCredential.user;
            console.log(db);
            const docRef = await addDoc(collection(db, "users"), {
              name: name,
              email: email,
              userType: userType
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (err) {
            console.error("Error adding document: ", err);
          }
        })

        
       
      } 
      
      catch (err) {
        alert(err.message);
      }

      
      // const querySnapshot = await getDocs(collection(db, "users"));
      // querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`); }
      // );
        
    };

    

    userRegistration(name, email, password, userType);
  }




  return (
    <div className="Entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === 'login' && 
        <LoginForm 
        handleOnChange = {handleOnChange}
        handleOnSubmit = {handleOnSubmit}
        formSwitcher = {formSwitcher}
        email = {email}
        password = {password}
        />}
        
        

        {formLoad === 'reset' && 
        <ResetForm 
        handleOnChange = {handleOnChange}
        handleOnResetSubmit = {handleOnResetSubmit}
        formSwitcher = {formSwitcher}
        email = {email}
        />}

        {formLoad === 'signup' && 
        <SignupForm 
        handleOnChange = {handleOnChange}
        handleOnSubmit = {handleOnSignupSubmit}
        formSwitcher = {formSwitcher}
        name = {name}
        email = {email}
        password = {password}
        confirmPassword = {confirmPassword}
        userType = {userType}
        />}

      </Jumbotron>
    </div>
  );
};

export default Entry;

