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
import './features.css'



class Features extends Component{

    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: '',
        }
    }
    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }


    render(){
        return(
            <section id="features" className="padding-tb100 bg-grey">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center margin-tb10">
                            <span className="ti-paint-bucket icon-type1"></span>
                            <h4 className="h4-type1 margin-t10" contentEditable>Creative Design</h4>
                            <p className="p-type-4 color-grey margin-t10" contentEditable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores quae
                                distinctio tempore.
                            </p>
                        </div>

                        <div className="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center margin-tb10">
                            <span className="ti-desktop icon-type1"></span>
                            <h4 className="h4-type1 margin-t10" contentEditable>Responsive</h4>
                            <p className="p-type-4 color-grey margin-t10" contentEditable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores quae
                                distinctio tempore.
                            </p>
                        </div>

                        <div className="col-md-4 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center margin-tb10">
                            <span className="ti-pencil-alt icon-type1"></span>
                            <h4 className="h4-type1 margin-t10" contentEditable>Well Documented</h4>
                            <p className="p-type-4 color-grey margin-t10" contentEditable>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ut alias ullam tempore nobis asperiores quae
                                distinctio tempore.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features


