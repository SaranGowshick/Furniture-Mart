import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './style.css';

const api_base="http://localhost:3001";

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        
        try{

            await axios.post(api_base + "/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login-container">
        <h2>Login</h2>
        <form action="POST">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
            </div>
            <div className="form-group">
                <button type="submit"onClick={submit}>Login</button>
            </div>
        </form>
    </div>
        // <div className="login">

        //     <h1>Login</h1>

        //     <form action="POST">
        //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
        //         <input type="submit" onClick={submit} />

        //     </form>

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/signup">Signup Page</Link>

        // </div>
    )
}

export default Login