import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

	constructor(props){
		//Always required for a constructor
		super(props);

		//State should be defined in the constructor of a component
		this.state = {
			//Store the DISHES imported from dishes.js file as 'this.state.dishes'
			dishes: DISHES
		};
	}

	render(){
		return (
		  <div>
			<Navbar dark color="primary">
			  <div className="container">
				<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
			  </div>
			</Navbar>
	  
			{/* Render the menu component */}
			{/* Make dishes available to menu component as props */}
			<Menu dishes = {this.state.dishes} />
		  </div>
		);
	  }
}

export default App;
