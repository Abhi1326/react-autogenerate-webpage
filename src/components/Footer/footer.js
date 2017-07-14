/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import './footer.css'



class Footer extends Component{

    render(){
        return(
            <footer id="footer" className="padding-tb50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1">
                            <div className="col-md-4 padding-tb50">
                                <img src="../../static/images/footer-logo.png" className="footerlogo" alt="" />
                                    <p className="footer-info-text" contentEditable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volu ptaonsec tetur adiu ptaonsec tetur adipisicing
                                        elit. Volu ptatu pis icing elit. Vditiis.</p>
                                    <p className="copyright" contentEditable>&copy; 2016 The Buzline theme</p>
                            </div>

                            <div className="col-md-2 padding-tb50">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Portfolio</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Terms</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div className="col-md-2 padding-tb50">
                                <ul>
                                    <li><a href="">Team</a></li>
                                    <li><a href="">Comapny</a></li>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Log in</a></li>
                                    <li><a href="">Register</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4 padding-tb50">
                                <div className="contact-details">
                                    <div>
                                        <span className="glyphicon glyphicon-map-marker"></span>
                                        <p>
                                            164/9 Orchard St,New York,<br /> NY 10002, United States.
                                        </p>
                                    </div>

                                    <div>
                                        <span className="glyphicon glyphicon-envelope"></span>
                                        <a href="">contact@buzline.com</a>
                                    </div>


                                    <div>
                                        <span className="glyphicon glyphicon-earphone"></span>
                                        <p> +1 6485 658956</p>
                                    </div>
                                    <div className="socialnlinks">
                                        <a href=""><span className="ti-facebook"></span></a>
                                        <a href=""><span className="ti-instagram"></span></a>
                                        <a href=""><span className="ti-twitter"></span></a>
                                        <a href=""><span className="ti-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        )
    }
}

export default Footer

