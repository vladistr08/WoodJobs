import React from 'react'
import './main.css'

class SignUp extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async (event: any)=>{
        console.log('Form Submitted')

    }

    handleChange  = (event: any)=>{
        console.log('Input value changed')
    }

    render() {
        return(
            <div className="container">
                <div className="row center">
                    <div className="col s12 text-darken-4">
                        <h3 className="amber-text">Sign up | Woodjobs</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate white-text"></input>
                        <label htmlFor="email">Email</label>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate white-text"></input>
                        <label htmlFor="password">Password</label>

                    </div>
                </div>
                <div className="row center">

                    <div className="col s12">
                        <button className="btn waves-effect waves-light amber accent-4" onClick={this.handleSubmit} type="submit" name="signin">Sign In
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                <div className="row center">
                    <div className="col s12">
                        <span className="col s12 grey-text">Don't have an account? </span>
                        <button className="mt-1 btn waves-effect waves-light amber accent-4" onClick={this.handleChange} type="submit" name="signup">Sign Up
                            <i className="material-icons right">grade</i>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default SignUp;