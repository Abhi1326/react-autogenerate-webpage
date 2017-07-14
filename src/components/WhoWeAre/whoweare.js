/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import './whoweare.css'
import CKEditor from "react-ckeditor-component";




class WhoWeAre extends Component{

    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.openEditor = this.openEditor.bind(this);

        this.state = {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'+'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'+' a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            showCk:true
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    openEditor(){

        if(this.state.showCk){
            this.setState({
                showCk:false
            })
        }else{
            this.setState({
                showCk:true
            })
        }

    }


    render(){
        return(
            <section id="whoweare">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 padding-tb100">
                            <h4 className="h4-type2 margin-t10">Who We Are</h4>
                            <div className="border-bar margin-t20 "></div>
                            {this.state.showCk?<p onDoubleClick={this.openEditor.bind(this)} className="p-type-5 color-grey margin-t20">
                                {this.state.content}
                            </p>:<div>
                                <button onDoubleClick={this.openEditor.bind(this)} className="btn btn-default">Done</button>
                                <CKEditor activeClass="p10" content={this.state.content} onChange={this.updateContent} />
                            </div>}
                            <a href="#" className="btn login-btn" contentEditable>GET STARTED</a>
                        </div>
                        <div className="col-md-6 col-xs-12 parallax-window" data-parallax="scroll" style={{backgroundImage: `url(../../static/images/whoweare.jpg)`,height:'450px',marginTop:'30px' }}  data-speed="0.4">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhoWeAre


