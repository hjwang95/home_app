import React, { Component } from 'react';
import './Head.css';
import ChildCareIcon from '@material-ui/icons/ChildCare';

function Logo(props){
    return(
        <ChildCareIcon></ChildCareIcon>
    );
}

function Content(params) {
    return(
        <div className="content" id = "content"> 
            <p className="p0">Welcome</p>
            <hr className="hr-light my-4 w-75"></hr>
            <p className="p1">This is Jane's homepage</p>

            <div className="projectHide" id = "projectHide">
                <div className="row left-margin-10">
                    <div className="col-sm-6 ">
                        <div className="card">
                            <div className="card-body background-color-light-blue">
                                <h5 className="card-title">World in a cell</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="http://worldbuilding.usc.edu/people/bio/huijun-wang/" className="btn btn-primary">Check out what I did in this</a>
                            </div>
                        </div>          
                    </div>

                    <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body background-color-light-blue">
                                        <h5 className="card-title">Entrtainment website</h5>
                                        <p className="card-text">This is a website that used Technology of Angular 7 and NodeJS</p>
                                        <a href="#" className="btn btn-primary">Go To the Page</a>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className="row left-margin-10">
                    <div className="col-sm-6">
                                <div className="card">
                                <div className="card-body background-color-light-blue">
                                    <h5 className="card-title">Up(VR game)</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="https://sites.google.com/usc.edu/whatsup/home" className="btn btn-primary">Check our website</a>
                                </div>
                                </div>
                    </div>
                
                    <div className="col-sm-6">
                                <div className="card">
                                <div className="card-body background-color-light-blue">
                                    <h5 className="card-title">Secret Of Runes (2D game)</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="https://sites.google.com/usc.edu/secret-of-runes/home" className="btn btn-primary" >Check our website</a>
                                </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}




function TitleElement(props) {
    function showProjects(){
        document.getElementById("projectHide").classList.toggle("projectPop");
    }

    function handleClick(e) {
        var name = props.name;
        if( name === 'Home'){
            var pageUrl =  'https://hjwang95.github.io/home_app' ;

            // bug: window.location.assign(pageUrl); is outside the if statement
            window.location.assign(pageUrl);
        }else if (name === 'Projects') {
            showProjects();
        }else{
            // Life button
        }
        

    }
    return (            
    <button onClick={handleClick} type="button" className="btn btn-outline-info btn-margin btn-circle">
        {props.name}
    </button>   
    );
}

function Head(props) {
    return ( 
        <div className = "head">
            <div className = "float-left"><Logo /></div>

            <div className="btn-toolbar btn-toolbar-margin float-right">
                <TitleElement name='Home' />
                <TitleElement name='Projects' id = "projects" />
                <TitleElement name='Life'/>
            </div>
                <Content></Content>

            
        </div>
    );
}

export default Head;
