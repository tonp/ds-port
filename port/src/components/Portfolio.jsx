import React from 'react'


var styles = {

  minHeight:'100vh', 
  backgroundColor: 'black'
};

var txtStyle = {
  textAlign: 'center', 
  color: 'white'
}

export default class Portfolio extends React.Component {

	render(){
		return(
			 <div style={styles}>
        <h3 style={txtStyle}> D S Photography </h3>

			 </div>
		)
	}
}