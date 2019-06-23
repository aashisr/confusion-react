import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

//Changed a presentational component to functional component since this componet works only with the props sent by
//its parent and there are no any local states or lifecycle hooks required

//dish and onClick are javaScript objects, so needs to be inside curly braces
function RenderMenuItem({ dish, onClick }) {
    return (
        // tag=li indicates these are going to be a list item
        //Pass dishId to onClick prop in Main component which sets the selectedDish state
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.description} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

//Same thing as above but an arrow function
//This const Menu is the component in MainComponent, props is the props passed from MainComponent
const Menu = props => {
    //ForEach dishes array with map function and return individual ment items as react component
    const menu = props.dishes.map(dish => {
        return (
            //React requires a key while rendering a list of items to identify each items uniquely
            <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* RenderMenuItem component defined above which passes the dish and onClick as props */}
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">{menu}</div>
        </div>
    );
};

//Export component from this file
//So, it can be imported in other files
export default Menu;
