import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent';

//Create new component Menu
class Menu extends Component {

    constructor(props) {
        super(props);

        //Define a state for component
        //State stores properties related to a component
        this.state = {
            selectedDish: null
        };
        console.log("Menu component constructor invoked");
    }

    //Call new lifecycle method
    componentDidMount() {
        //Do something after the componennt is mounted in DOM
        console.log("Menu component componentDidMount invoked");
    }

    onDishSelect(dish){
        //Always use this.setState to change the state
        this.setState({ selectedDish: dish });
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                //React requires a key while rendering a list of items to identify each items uniquely
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* tag=li indicates these are going to be a list item */}
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.description}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Menu component render invoked");
        console.log('Selected dish is ', this.state.selectedDish);

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish}></DishDetail>
            </div>
        );
    }
}

//Export component from this file
//So, it can be imported in other files
export default Menu;