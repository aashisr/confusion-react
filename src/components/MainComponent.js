import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

//Create new component Main as a container component
class Main extends Component {
	
	constructor(props){
		//Always required for a constructor
		super(props);

		//State should be defined in the constructor of a component
		//State stores properties related to a component
		this.state = {
			//Store the DISHES imported from dishes.js file as 'this.state.dishes'
			//and selectedDish as null
			dishes: DISHES,
			selectedDish: null
		}
	}

	onDishSelect(dishId){
        //Always use this.setState to change the state
        this.setState({ selectedDish: dishId });
    }

	render() {
		return(
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>

				{/* Render the menu component */}
				{/* Make dishes available to menu component as props */}
				{/* Also pass onClick function as props which is executed from Menu component */}
				<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
				
				{/* Filter the dishes array by comparing the dish id with the id from selectedDish
				 state and pass the selected filtered dish to DishDetail component*/}
				<DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
			</div>
		);
	}
}

export default Main;