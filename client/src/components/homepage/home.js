import React from "react"
import {useLocation, Link} from 'react-router-dom';
import styles from'./homestyle.module.css';
import Girl from '../assets/girl.png'
import Logo from '../assets/logo.png'
import "@fortawesome/fontawesome-free/css/all.css";



function Home (){
    const location=useLocation()

    return (
        <header>
  <nav>
    <div className={styles.navbar}> 
      <div className={styles.logo}> 
        <img src={Logo}alt=""/>
      </div>
      <ul className={styles.menu}> 
        <li><a href="/">Home</a></li>
        <li><a href="#">Latest</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Stocks</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className={styles["search-box"]}> 
        <input type="text" placeholder="Search here..."/>
        <a href="#"><i className="fas fa-search"></i></a>
      </div>
    </div>
  </nav>
  <div className={styles.content}> 
    <div className={styles["text-content"]}> 
      <div className={styles.text}>Hello, It's Me </div>
      <div className={styles.name}>Hannah Lennon</div>
      <div className={styles.job}> 
        <div className={styles.job}> 
          <span>And I'm a</span>
          <div className={styles["typing-text"]}> 
            <span className={styles.one}>Youtuber,</span> 
            <span className={styles.two}>Blogger.</span>
          </div>
        </div>
      </div>
      <div className={styles.buttons}> {/* Use styles.buttons */}
        <button>About Me</button>
        <button>Follow Me</button>
      </div>
    </div>
    <div className={styles.girl}> 
      <img src={Girl} alt=""></img>
    </div>
  </div>
  <div className={styles["media-icons"]}> 
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
</div>
</header>

    )
}

export default Home