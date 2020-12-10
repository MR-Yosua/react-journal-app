import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);



    const [formValues,handeInputChange] = useForm ({
        name:'camelio',
        email: 'cam@gmail.com',
        password: 'asdasd',
        password2: 'asdasd'
    })

    const {name,email,password,password2} = formValues;

    const handleRegister = (e)=>{
        e.preventDefault();

        if( isFormValid() ){
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }
    }

    const isFormValid = ()=>{
    
        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        }else if (!validator.isEmail( email )){
            dispatch(setError('Email is not valid'));
            return false;
        }else if (password !== password2){
            dispatch(setError('Password must be equals'));
            return false;
        }
        if (password.length <= 5){
            dispatch(setError('Password must have at least 5 characters'));
            return false;
        }

        dispatch(removeError());

        return true;
    }





    return (
        <Fragment>
            <h3 className="auth__title-register"> Register </h3>

            <form onSubmit={handleRegister}>


            {
                msgError && 
                (<div className = "animate__animated animate__pulse">
                    {msgError}
                </div>)
            
            }


            <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete= "off"
                    value={name}
                    onChange={handeInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete= "off"
                    value={email}
                    onChange={handeInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handeInputChange}
                />

                <input  
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handeInputChange}
                />

                <button 
                type="submit"
                className="btn-login btn-primary btn-block mb-5"
                
                >
                    Register
                </button>
      
                <Link to ="/auth/login"
                    className = "link mt-5"
                >
                    Aready Registered?
                </Link>
                
            </form>

        </Fragment>
    )
}
