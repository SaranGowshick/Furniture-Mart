import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import styles from'./signin.module.css';

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
        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

      <div className={styles.signin}> 
      <div className={styles.content}> 
        <h2 className={styles.heading}>Sign In</h2> 
        <div className={styles.form}> 
          <div className={styles.inputBox}> 
            <input type="text" onChange={(e) => {setEmail(e.target.value);}} required/><i>Email</i>
          </div>
          <div className={styles.inputBox}> 
            <input type="password"  autoComplete="off"onChange={(e) => {setPassword(e.target.value);}}required/><i>Password</i>
          </div>
          <div className={styles.links}> 
            <a href="#">Forgot Password</a>
            <a href="/signup">Signup</a>
          </div>
          <div className={styles.inputBox}>  
            <input type="submit"onClick={submit} value="Login"className={styles.submitBtn}/>
          </div>
        </div>
      </div>
    </div>
    </section>
    //     <div className="login-container">
    //     <h2>Login</h2>
    //     <form action="POST">
    //         <div className="form-group">
    //             <label htmlFor="email">Email</label>
    //             <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="password">Password</label>
    //             <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
    //         </div>
    //         <div className="form-group">
    //             <button type="submit"onClick={submit}>Login</button>
    //         </div>
    //         <div className="form-group">
    //              <a href="/signup">Signup</a>
    //              <br></br>
    //              <a href="/forgotpassword">Reset Password</a>
    //         </div>
    //     </form>
    // </div>
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
    );
}

export default Login