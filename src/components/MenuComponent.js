import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

//Create new component Menu
class Menu extends Component {

    constructor(props) {
        super(props);

        //Define a state for component
        //State stores properties related to a component
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish){
        //Always use this.setState to change the state
        this.setState({ selectedDish: dish });
    }

    renderDish(dish){
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.description}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                //Return empty div
                <div></div>
            );
        }
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

        return (
            <div className="container">
                 <div className="row">
                     {menu}
                 </div>
                 <div className="row">
                     {this.renderDish(this.state.selectedDish)}
                 </div>
            </div>
        );
    }
}

//Export component from this file
//So, it can be imported in other files
export default Menu;