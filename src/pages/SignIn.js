import  React from 'react'
import { useHistory } from "react-router-dom";
import logo from '../logo.png'
import { githubProvider } from "../config/authMethods"
import socialMediaAuth from '../service/auth';
import GithubButton from 'react-github-login-button'
function SignIn() {
    let history = useHistory();

    const gitHubAuthButton = async (provider) => {


        const res = await socialMediaAuth(provider);
        console.log(res);
        history.push("/Home")
    }
    return (
        <div className="search-box" style={{
            width: "auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }}>
            <img src={logo} alt = 'company' className="pt- pb-10" />
            <GithubButton
                onClick={() => { gitHubAuthButton(githubProvider); console.log('Github button clicked') }}
            />
        </div >
    )
}

export default SignIn
