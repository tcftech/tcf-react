import React from 'react'

import './Footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <>
        <footer id="footer" class="footer position-relative">

        <div class="container footer-top">
        <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
            <a href="Home.html" class="logo d-flex align-items-center">
                <span class="sitename">TCF Technology</span>
            </a>
            <div class="footer-contact pt-3">
                <p> 9/5, 4th St, Railway Colony, Aminjikarai, Chennai, <br/> Tamil Nadu 600029</p>
            
                <p class="mt-3"><strong>Phone:</strong> <span class="contact-phone">+91 90803 03212</span></p>
                <p><strong>Email:</strong> <span>tcftechnologies.contact@gmail.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
                <a href="https://www.youtube.com/@tcftechnologys"><YouTubeIcon/></a>
                <a href="https://www.facebook.com/tcftechnologys"><FacebookIcon/></a>
                <a href="https://www.instagram.com/tcf_technologies?utm_source=qr&igsh=MTIzeTRqbjhlOGtrYw=="><InstagramIcon/></a>
                <a href="https://www.linkedin.com/company/tcf-technologies-training/"><LinkedInIcon/></a>

            </div>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
            <h4>Our Courses</h4>
            <ul>
                <li><a href="#">Software Testing</a></li>
                <li><a href="#">MERN Stack</a></li>
                <li><a href="#">Python FullStack</a></li>
                <li><a href="#">JAVA FullStack</a></li>
                <li><a href="#">Data Science</a></li>
                <li><a href="#">AWS - Devops</a></li>
            </ul>
            </div>

            <div class="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            {/* <form action="forms/newsletter.php" method="post" class="php-email-form"> */}
                <div class="newsletter-form">
                    <input type="email" name="email"/> <input type="submit" value="Subscribe" /> 
                    </div>
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your subscription request has been sent. Thank you!</div>
            {/* </form> */}
            </div>

        </div>
        </div>


        </footer>
    </>
  )
}
