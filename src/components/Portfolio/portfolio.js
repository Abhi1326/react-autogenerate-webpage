/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './portfolio.css'




class Portfolio extends Component{

    render(){
        return(
            <section id="portfolio" className="padding-tb100">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="h4-type2 text-center">Portfolio</h4>
                            <div className="border-bar2 margin-t20"></div>
                        </div>
                    </div>

                    <div className="row margin-t50">

                        <div className="col-md-4 margin-t30">
                            <div className="portfolio-item">
                                <a href="images/portfolio/item1.jpg" data-lightbox="portfolio">
                                    <img src="../../static/images/portfolio/item1.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 margin-t30">
                            <div className="portfolio-item">
                                <a href="images/portfolio/item2.jpg" data-lightbox="portfolio">
                                    <img src="../../static/images/portfolio/item2.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 margin-t30">
                            <div className="portfolio-item">
                                <a href="images/portfolio/item3.jpg" data-lightbox="portfolio">
                                    <img src="../../static/images/portfolio/item3.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 margin-t30">
                            <div className="portfolio-item">
                                <a href="images/portfolio/item47.jpg" data-lightbox="portfolio">
                                    <img src="../../static/images/portfolio/item47.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 margin-t30">
                            <div className="portfolio-item">
                                <a href="images/portfolio/item5.jpg" data-lightbox="portfolio">
                                    <img src="../../static/images/portfolio/item5.jpg" alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-4 margin-t30">
                            <div className="portfolio-item">
                                <a href="images/portfolio/item6.jpg" data-lightbox="portfolio">
                                    <img src="../../static/images/portfolio/item6.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        )
    }
}

export default Portfolio

