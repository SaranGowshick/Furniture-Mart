import axios from 'axios';
import React from 'react';
import styles from './contact.module.css';
import Logo from '../assets/logo.png';
import Furniture from '../assets/furniture.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


function Contact() {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

        <nav>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo"/>
                </div>
                <ul className={styles.menu}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Latest</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Stocks</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div className={styles.interior_13}>
            <div className={`${styles['responsive-container-block']} ${styles['big-container']}`}>
                <div className={styles['responsive-container-block container']}>
                    <div className={styles['responsive-container-block']}>
                        
                        <div className={`${styles['responsive-cell-block']} ${styles['wk-tab-12']} ${styles['wk-mobile-12']} ${styles['wk-ipadp-12']} ${styles['wk-desk-6']}`} id="i7wk">
                            <div className={styles['card-content']}>
                                <p className={`${styles['text-blk']} ${styles['section-head']}`}>
                                    Get in touch
                                </p>
                                <p className={`${styles['text-blk']} ${styles['sub-head']}`}>
                                    Customer satisfaction is our top priority, and we're committed to ensuring that your furniture shopping experience <br></br>
                                    is a pleasant one. Don't hesitate to get in touch with us, and let us help you make your living space truly special  <br></br>
                                    with our exquisite furniture collections. We look forward to hearing from you! <br></br>
                                </p>
                                <div className={styles["media-icons-container"]}>
                                    <div className={styles["media-icons"]}>
                                        <a style={{ marginRight: '20px' }}href="#"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
                                        <a style={{ marginRight: '20px' }}href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                                        <a style={{ marginRight: '20px' }}href="#"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className={`${styles['responsive-cell-block']} ${styles['wk-tab-12']} ${styles['wk-mobile-12']} ${styles['wk-ipadp-12']} ${styles['wk-desk-6']} ${styles['img-one']}`} id="iwgx">
                            <img src={Furniture} className={styles['img-sofa3']} id="isvcn" alt='furnitures'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Contact;
