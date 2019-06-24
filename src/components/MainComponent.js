import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { Switch, Route, Redirect } from "react-router-dom";

//Create new component Main as a container component
class Main extends Component {
    constructor(props) {
        //Always required for a constructor
        super(props);

        //State should be defined in the constructor of a component
        //State stores properties related to a component
        this.state = {
            //Store the DISHES imported from dishes.js file as 'this.state.dishes'
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
        };
    }

    render() {
        // declare HomePage component
        const HomePage = () => {
            return (
                // Pass featured dish, promotion and leader from the gven data
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        // match is one of the three params provided by React router which holds the route and its params info
        const DishWithId = ({ match }) => {
            return (
                // Parse the string dishId to int using parseInt
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter(
                        (comment) => comment.dishId === parseInt(match.params.dishId, 10),
                    )}
                />
            );
        };

        return (
            <div>
                <Header />

                {/* Switch the components bases on the routes defined */}
                <Switch>
                    {/* Render the home component if route matches to /home */}
                    <Route path="/home" component={HomePage} />

                    {/* Render the menu component if route exactly matches to /menu */}
                    {/* To pass props with the component, needs to be defined like below */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />

                    <Route path="/menu/:dishId" component={DishWithId} />

                    <Route exact path="/contactus" component={Contact} />

                    {/* Use redirect to specify a default route if routes does not match any above routes */}
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
