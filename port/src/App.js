import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/Portfolio'


export default class App extends React.Component {
  render(){
    return(
      <div className='wrapper'> 
        <Sidebar/>
        <Home/>
        <About/>
        <Portfolio/>
      </div>
      )
  }
}
