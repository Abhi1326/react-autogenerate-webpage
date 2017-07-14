/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import './slider.css'



class Slider extends Component{


    componentDidMount(){
    }

    render(){
        return(
            <section id="slider">
                <div className="flexslider flexslide-container">
                    <ul className="slides">
                        <li style={{backgroundImage: `url(../../static/images/slides/slide1.jpg)` }}>
                            <div className="flex-caption fadeInUp animated">
                                <p className="p-type-1" contentEditable>MULTIPURPOSE HTML5 RESPONSIVE THEME</p>
                                <h5 className="h5-type-1 margin-t20" contentEditable>Clean &amp; Modern Design</h5>
                                <div className="border-bar margin-t20 "></div>
                                <p className="p-type-2 margin-t20 text-justify" contentEditable>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                                    to use a passage of Lorem Ipsum.</p>
                                <a href="#" className="btn login-btn" contentEditable>GET STARTED</a>
                            </div>
                        </li>

                        <li style={{backgroundImage: `url(../../static/images/slides/slide2.jpg)` }}>
                            <div className="flex-caption fadeInUp animated">
                                <p className="p-type-1" contentEditable>MULTIPURPOSE HTML5 RESPONSIVE THEME</p>
                                <h5 className="h5-type-1 margin-t20" contentEditable>Clean &amp; Modern Design</h5>
                                <div className="border-bar margin-t20 "></div>
                                <p className="p-type-2 margin-t20 text-justify" contentEditable>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                                    to use a passage of Lorem Ipsum.</p>
                                <a href="#" className="btn login-btn" contentEditable>GET STARTED</a>
                            </div>
                        </li>

                        <li style={{backgroundImage: `url(../../static/images/slides/slide3.jpg)` }}>
                            <div className="flex-caption fadeInUp animated">
                                <p className="p-type-1" contentEditable>MULTIPURPOSE HTML5 RESPONSIVE THEME</p>
                                <h5 className="h5-type-1 margin-t20" contentEditable>Clean &amp; Modern Design</h5>
                                <div className="border-bar margin-t20 "></div>
                                <p className="p-type-2 margin-t20 text-justify" contentEditable>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                    some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                                    to use a passage of Lorem Ipsum.</p>
                                <a href="#" className="btn login-btn" contentEditable>GET STARTED</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

        )
    }
}

export default Slider

