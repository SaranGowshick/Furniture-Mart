import React from "react"
import {useLocation, Link} from 'react-router-dom';
import './style.css';


function Home (){
    const location=useLocation()

    return (
        <div className="homepage">
        <header className="preview-header">
            <a className="logo" href="">Gowshick market</a>
        </header>
        <section id="one"> 
        <div className="second-header"> 
            <div className="first">
                <ul>
                    <li><a href="">Account</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/admin">Store</a></li>
                </ul>
            </div> 
            <address><i className="fa-solid fa-location-dot"></i> Vadapalani,Chennai-600060</address> 
            <div className="user">
                <a href="/login"><i className="fas fa-user-alt"></i> Login</a>
                <a href="/signup"><i className="fas fa-pen"></i> signup</a>
            </div>
        </div>
    </section>
{/* 
            <h1>Hello {location.state.id} and welcome to the home</h1> */}
            {/*<Link to="/admin">Admin Page</Link>*/}

        </div>
    )
}

export default Home