import React, {useEffect, useState} from 'react'
import '../components/css/main.css'
import {useNavigate} from 'react-router-dom'

const SignIn = (props: any) => {

    const [firstName, setFName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event: any)=>{
        navigate('/home', {replace:true})
    }

    const handleChange  = (event: any)=>{
        navigate('/signin', {replace: true})
    }

    return(
        <div className="container">
            <div className="row center">
                <div className="col s12 text-darken-4">
                    <h3 className="amber-text">Sign up | Woodjobs</h3>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="firstName" type="text" className="white-text" value={firstName} onChange={input => setFName(input.target.value)}></input>
                    <label htmlFor="email">First Name</label>

                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="lastName" type="text" className="white-text" value={lastName} onChange={input => setLastName(input.target.value)}></input>
                    <label htmlFor="email">Last Name</label>

                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="email" type="email" className="validate white-text" value={email} onChange={input => setEmail(input.target.value)}></input>
                    <label htmlFor="email">Email</label>

                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="password" type="password" className="validate white-text" value={password} onChange={input => setPassword(input.target.value)}></input>
                    <label htmlFor="password">Password</label>

                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="rePassword" type="password" className="validate white-text" value={rePassword} onChange={input => setRePassword(input.target.value)}></input>
                    <label htmlFor="password"> Password Again</label>

                </div>
            </div>
            <div className="row center">

                <div className="col s12">
                    <button className="btn waves-effect waves-light amber accent-4" onClick={handleSubmit} type="submit" name="signup">Sign Up
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
            <div className="row center">
                <div className="col s12">
                    <span className="col s12 grey-text">Already have an account? </span>
                    <button className="mt-1 btn waves-effect waves-light amber accent-4" onClick={handleChange} type="submit" name="signup">Sign In
                        <i className="material-icons right">grade</i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SignIn;