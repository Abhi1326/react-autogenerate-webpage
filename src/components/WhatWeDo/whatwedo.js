/**
 * Created by consultadd on 13/7/17.
 */
/**
 * Created by consultadd on 13/7/17.
 */

import React,{Component} from 'react'
import './whatwedo.css'
import CKEditor from "react-ckeditor-component";



class WhatWeDo extends Component{

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
            <section id="whatwedo" className="padding-tb100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="h4-type2">What We Do</h4>
                            <div className="border-bar2 margin-t20 "></div>
                            {this.state.showCk?<p onDoubleClick={this.openEditor.bind(this)} className="p-type-5 color-grey margin-t20">
                                {this.state.content}
                            </p>:<div>
                                <button onDoubleClick={this.openEditor.bind(this)} className="btn btn-default">Done</button>
                                <CKEditor activeClass="p10" content={this.state.content} onChange={this.updateContent} />
                            </div>}
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default WhatWeDo


