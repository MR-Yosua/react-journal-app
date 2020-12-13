import Swal from 'sweetalert2'
import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";
import { noteLogout } from './notes';


export const startLoginEmailPassword = (email,password) => {
    return (dispatch) =>{

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName));
            dispatch(finishLoading());
        }).catch(e=>{
            console.log(e);
            dispatch(finishLoading());
            Swal.fire('Error',e.message,'error');
        });
    }
}



export const startRegisterWithEmailPasswordName = (email,password,name,) => {
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( async ({user})=>{
            //solucion para display name en registro
            await user.updateProfile({displayName:name});
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Register was successful',
                showConfirmButton: false,
                timer: 1500
              });
        }).catch(e =>{
            Swal.fire('Error',e.message,'error');
        });
       
    }
}


export const startGoogleLogin = ()=>{
    return (dispatch)=>{

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{

            dispatch(
                login(user.uid,user.displayName)
            )
        });
    }
}


export const login = (uid, displayName) => ({ 

    type: types.login,
    payload:{
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async(dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch( noteLogout() );
    }
}

export const logout = ()=>({
    type:types.logout
})