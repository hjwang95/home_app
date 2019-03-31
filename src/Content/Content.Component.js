
import React, { Component } from 'react';
import './Content.Component.css';

class PicComponent extends Component{
    render(){
        return (
            <div className="container">
                <div className="row align-items-center h-100 ">
                    <div className="col-6 mx-auto">
                        <p className='homeContent'>
                            Welcome
                        </p> 
                        <hr className="hr-light my-4 w-75"></hr>
                        <p className='homeIntro'>
                            This is Jade's homepage
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

class ContentComponet extends Component{
    render(){
        return(           
            <PicComponent/>
        ) 
    }
}
export default ContentComponet;