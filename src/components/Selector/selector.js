/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import Header from '../Header/header'
import Features from '../Features/features'
import Portfolio from '../Portfolio/portfolio'
import Services from '../Services/services'
import Slider from '../Slider/slider'
import WhatWeDo from '../WhatWeDo/whatwedo'
import WhoWeAre from '../WhoWeAre/whoweare'
import Footer from '../Footer/footer'
import Testimonials from '../Testimonials/testimonials'
import './selector.css'
import $ from 'jquery'



const componentList = [

    {id: 1, heading: 'Header', comp:<Header />,img:<img src="/static/images/header.png" /> },
    {id: 2, heading: 'Slider', comp: <Slider />,img:<img src="/static/images/slider.png" />},
    {id: 3, heading: 'WhatWeDo', comp: <WhatWeDo />,img:<img src="/static/images/whatwedo.png" />},
    {id: 4, heading: 'Features', comp: <Features />,img:<img src="/static/images/services.png" />},
    {id: 5, heading: 'WhoWeAre', comp: <WhoWeAre />,img:<img src="/static/images/whoweare.png" />},
    {id: 6, heading: 'Services', comp: <Services />,img:<img src="/static/images/features.png" />},
    {id: 7, heading: 'Portfolio', comp: <Portfolio />,img:<img src="/static/images/portfolio.png" />},
    {id: 8, heading: 'Testimonials', comp: <Testimonials />,img:<img src="/static/images/testimonials.png" />},
    {id: 9, heading: 'Footer', comp: <Footer />,img:<img src="/static/images/footer.png" />}
];


class Selector extends Component{

    constructor(props){
        super(props);
        this.state = {
            componentListData:[],
            toggle:true,
            arr:[]
        }

        this.setData = this.setData.bind(this)
        this.toggleSideNav = this.toggleSideNav.bind(this)
    }

    setData(data){

        if(data.heading == 'Header'){
            this.state.arr.splice(0, 0, data)
            this.setState({
                arr:this.state.arr
            },()=>{
                this.props.arrayVal(this.state.arr)
            })
        }else{
            this.state.arr.push(data);
            this.setState({
                arr:this.state.arr
            },()=>{
                this.props.arrayVal(this.state.arr)
            })
        }
    }

    toggleSideNav(){

        if(this.state.toggle){
            this.setState({
                toggle:false
            })
        }else{
            this.setState({
                toggle:true
            })
        }

    }

    componentWillMount(){
        let data = componentList;
        this.setState({
            componentListData:data
        })

    }

    render(){
        return(
            <div className="openOver">
                <div className="row">
                    <div className="col-md-2 bar">
                        <button className="btn btn-default togglebtn" onClick={this.toggleSideNav}><span className="ti-menu"></span> </button>
                    </div>
                    {this.state.toggle &&
                    <div className="col-md-8 display_list">
                        <ul className="overTop">

                            {this.state.componentListData.map((list,i)=>(
                                <div key={i} onClick={()=>this.setData(list)}>
                                    <li className={list.heading}>
                                        {list.heading}
                                    </li>
                                    <li>
                                        {list.img}
                                    </li>
                                </div>

                            ))
                            }

                        </ul>
                    </div>}
                </div>
            </div>



        )
    }
}

export default Selector

