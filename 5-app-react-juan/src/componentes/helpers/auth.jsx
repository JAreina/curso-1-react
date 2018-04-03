import {firebaseAuth,ref} from '../data/config';



const saveUser = (user)=>(
    ref.child(`users/${user.uid}/info`)
        .set({
         email: user.email,
         uid: user.uid
        })
        .then(()=>{user.sendEmailVerification().then(function() {
            // Email sent.
          }).catch(function(error) {
            // An error happened.
          });
          })
)


const auth = (email,password)=>(
    firebaseAuth()
     .createUserWithEmailAndPassword(email,password)
     .then(saveUser)
)

const login = (email,password)=>firebaseAuth().signInWithEmailAndPassword(email,password);

const logout = ()=> firebaseAuth().signOut();

const resetPassword = (email)=> firebaseAuth().sendPasswordResetEmail(email);


export {
    saveUser,
    auth,
    login,
    logout,
    resetPassword
}