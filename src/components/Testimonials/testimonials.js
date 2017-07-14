/**
 * Created by consultadd on 14/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import './testimonials.css'



class Testimonials extends Component{

    render(){
        return(

            <section id="testimonial" className="padding-tb100 parallax-testimonial" data-parallax="scroll" style={{backgroundImage: `url(../../static/images/parallax-back.jpg)`,height:'400px' }}  data-image-src="/static/images/parallax-back.jpg"
                     data-speed="0.4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial">
                                <ul className="slides text-center">
                                    <li>
                                        <p className="testimonial-text" contentEditable>Nulla nec nisi viverra, facilisis nisl in, pulvinar metus. Mauris sit amet ligula blandit, efficitur magna
                                            et, hendrerit nisi. Suspendisse dapibus venenatis nunc.</p>
                                        <div className="border-bar3"></div>
                                        <h5>John Doe</h5>
                                        <h6>CEO of Design Company</h6>
                                    </li>
                                    <li>
                                        <p className="testimonial-text" contentEditable>Nulla nec nisi viverra, facilisis nisl in, pulvinar metus. Mauris sit amet ligula blandit, efficitur magna
                                            et, hendrerit nisi. Suspendisse dapibus venenatis nunc.</p>
                                        <div className="border-bar3"></div>
                                        <h5>John Doe</h5>
                                        <h6>CEO of Design Company</h6>
                                    </li>
                                    <li>
                                        <p className="testimonial-text" contentEditable>Nulla nec nisi viverra, facilisis nisl in, pulvinar metus. Mauris sit amet ligula blandit, efficitur magna
                                            et, hendrerit nisi. Suspendisse dapibus venenatis nunc.</p>
                                        <div className="border-bar3"></div>
                                        <h5>John Doe</h5>
                                        <h6>CEO of Design Company</h6>
                                    </li>
                                    <li>
                                        <p className="testimonial-text" contentEditable>Nulla nec nisi viverra, facilisis nisl in, pulvinar metus. Mauris sit amet ligula blandit, efficitur magna
                                            et, hendrerit nisi. Suspendisse dapibus venenatis nunc.</p>
                                        <div className="border-bar3"></div>
                                        <h5>John Doe</h5>
                                        <h6>CEO of Design Company</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}

export default Testimonials

