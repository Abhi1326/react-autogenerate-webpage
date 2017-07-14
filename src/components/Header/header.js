
import React,{Component} from 'react'
import './header.css'




class Header extends Component{

    render(){
        return(
            <header id="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <a href=""><img src="../../static/images/nav-logo.png" alt="Logo" className="main-nav-logo" /></a>
                            <span className="ti-menu nav-btn-open hidden-md hidden-lg"></span>
                        </div>
                        <div className="col-md-8 text-center">
                            <ul className="main-nav">
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <a href="" className="login-btn btn pull-right">Sign In</a>
                        </div>
                    </div>
                </div>
            </header>


        )
    }
}

export default Header

