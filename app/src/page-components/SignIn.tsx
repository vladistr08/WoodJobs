import React, {useEffect, useState} from 'react'
import '../components/css/main.css'
import {useNavigate} from 'react-router-dom'
import {loginAccount} from "../service/appwrite-config";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignIn = (props: any) => {

    const loginErrorToast = () => toast.error('Error at Login, please try again!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const inputErrorToast = () => toast.error('Please provide a valid input!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate()

    const handleSubmit = async (event: any)=>{
        if(!email || !password){
            inputErrorToast()
            return
        }
        const response = await loginAccount({email, password})
        if(response){
            navigate('/home', {replace:true})
        }
        else{
            loginErrorToast()
        }
    }

    const handleChange  = (event: any)=>{
        navigate('/signup', {replace: true})
    }

    return(
        <div className="container">
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable

                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="row center">
                <div className="col s12 text-darken-4">
                    <h3 className="amber-text">Sign in | Woodjobs</h3>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="email" type="email" className="validate white-text" value={email}
                           onChange={input => setEmail(input.target.value)}></input>
                    <label htmlFor="email">Email</label>

                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="password" type="password" className="validate white-text" value={password}
                           onChange={input => setPassword(input.target.value)}></input>
                        <label htmlFor="password">Password</label>

                </div>
            </div>
            <div className="row center">

                <div className="col s12">
                    <button className="btn waves-effect waves-light amber accent-4" onClick={handleSubmit} type="submit" name="signin">Sign In
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
            <div className="row center">
                <div className="col s12">
                    <span className="col s12 grey-text">Don't have an account? </span>
                    <button className="mt-1 btn waves-effect waves-light amber accent-4" onClick={handleChange} type="submit" name="signup">Sign Up
                        <i className="material-icons right">grade</i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SignIn;