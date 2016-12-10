import React, { Component } from 'react'
import logo from '../img/sgfLogo.png'

class AppBar extends Component
{
	constructor(props)
	{
		super(props)
	}

	render()
	{
		return(
	    <header className={"appBar verticalAlignFlex boxShadow1 " + this.props.hideOnDesktop }> 
	      <h1 className="verticalAlignFlex"> 
	        <img className="logo paddingRight10px" src={logo} alt="logo"/> 
	        <span className="tabPlusOnly"> Study Group Finder </span>
	      </h1> 
	      <nav className="navItems"> 
	        <a className="right"> 
	          <i className="material-icons">more_vert</i> 
	        </a> 
	      </nav>
	    </header>
		)
	}
} 

export default AppBar