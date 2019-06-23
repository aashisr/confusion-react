import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//Create new component Menu as a pure presentational component
class Menu extends Component {

    constructor(props) {
        super(props);

        console.log("Menu component constructor invoked");
    }

    //Call new lifecycle method
    componentDidMount() {
        //Do something after the componennt is mounted in DOM
        console.log("Menu component componentDidMount invoked");
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                //React requires a key while rendering a list of items to identify each items uniquely
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* tag=li indicates these are going to be a list item */}
                    {/* Pass dishId to onClick prop in Main component which sets the selectedDish state */}
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.description}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Menu component render invoked");

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

//Export component from this file
//So, it can be imported in other files
export default Menu;