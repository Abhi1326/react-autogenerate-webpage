/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import './home.css'
import {connect} from 'react-redux'
import Selector from '../../components/Selector/selector'
import * as actions from '../../actions/authActions'





let removeElm=[];
export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:[],
            closeBack:false,
            scriptLoaded:true
        }

        this.openTemplate = this.openTemplate.bind(this)
        this.removeElement = this.removeElement.bind(this)
    }


    componentDidMount(){

    }


    componentWillReceiveProps(newProps){

    }

    removeElement(val){

        let arr = this.state.show
        arr.splice(val,1)
        if(arr.length != 0){
            this.setState({
                show:arr,
                closeBack: true
            })
        }else{
            this.setState({
                closeBack: false
            })
        }


    }

    componentWillMount(){

    }

    openTemplate(val){

        this.setState({
            closeBack:true,
            show:val
        })
    }




        render(){



        return(
            <div>
                <Selector arrayVal={this.openTemplate.bind(this)}/>
                {this.state.closeBack ?
                    <div >
                    {
                        this.state.show.map((show,i)=>(
                            <div key={i}>
                                <div className="remove_btn" onClick={()=>this.removeElement(i)}>Remove</div>
                                {show.comp}
                            </div>
                        ))
                    }
                </div>: <div><img src="/static/images/backImg.png"/></div>}


            </div>

        )
    }
}


const mapStateToProps=(state)=>{


    return {

    }
}


export default connect(mapStateToProps,actions)(Home);
