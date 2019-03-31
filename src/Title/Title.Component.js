import React, { ReactDOM, Component } from 'react';
import './Title.Component.css';
import ProjectsComponent from '../Projects/Projects.Component';

class TitleElement extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
       
    handleClick() {
        var pageName = this.props.name;
        var pageUrl =  '/' + pageName + ".html";

        if( pageName === 'Home'){
            pageUrl =  'https://hjwang95.github.io/home_app/' ;
        }
        window.location.assign(pageUrl);
        console.log(pageUrl);

    }

    render () {
        const name = this.props.name;
        return (
            <button onClick={this.handleClick} type="button" className="btn btn-outline-info btn-margin btn-circle">{name}</button>   
        )
      }
}

class Logo extends Component{
    render(){
        return (
            <button type="button" className="btn btn-default btn-margin btn-circle"><i className="material-icons">filter_drama</i></button>   
        )
    }
}


class TitleComponent extends Component{
    render () {
        return (
            <div>
                <Logo />

                <div className="btn-toolbar btn-toolbar-margin float-right">
                    <TitleElement name='Home'/>
                    <TitleElement name='Projects'/>
                    <TitleElement name='Life'/>
                </div>
            </div>
            
        )
      }
}

export default TitleComponent



// <!-- Main navigation -->
// <header>
//   <!-- Navbar -->
//   <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
//     <div class="container">
//       <a class="navbar-brand" href="#">Navbar</a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//         <ul class="navbar-nav mr-auto smooth-scroll">
//           <li class="nav-item">
//             <a class="nav-link" href="#home">Home
//               <span class="sr-only">(current)</span>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#about" data-offset="90">About</a>
//           </li>
//         </ul>
//         <!-- Social Icon  -->
//         <ul class="navbar-nav nav-flex-icons">
//           <li class="nav-item">
//             <a class="nav-link">
//               <i class="fab fa-facebook-f light-green-text-2"></i>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link">
//               <i class="fab fa-twitter light-green-text-2"></i>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link">
//               <i class="fas fa-instagram light-green-text-2"></i>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>