import React, { Component } from 'react'
import bgimg1 from '../3.jpg'
import '../Home.css'
import {fadeIn,slideInDown} from 'animate.css'


var styles = {

  minHeight:'100vh',
  backgroundImage: `url(${bgimg1})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

var txtStyle = {
  fontSize:'100px',
  textAlign: 'center', 
  color: 'white', 
  textShadow:'2px 0px 2px black',
  margin:'auto'
}

var outer = {
  width:'100%',
  height:'100vh',
  display:'flex'
}


export default class Home extends Component {

	render(){
		return(
      
			 <div className="animated fadeIn delay-.8s" style={styles}>
        <section style={outer} className="animated fadeIn delay-1s">

          <h4 style={txtStyle}> D S Photography </h4>
        </section>
        </div>
		)
	}
}