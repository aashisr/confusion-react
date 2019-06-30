import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

//Gets the state of the application as parameter from redux store,
//Maps the redux store state to props and makes it available to use in this component
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
};

//Create new component Main as a container component
class Main extends Component {
    //states defined in redux store becomes available as props instead of state because of mapStateToProps function
    render() {
        // declare HomePage component
        const HomePage = () => {
            return (
                // Pass featured dish, promotion and leader from the gven data
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        // match is one of the three params provided by React router which holds the route and its params info
        const DishWithId = ({ match }) => {
            console.log("Props in DishWithId " + JSON.stringify(this.props));
            return (
                // Parse the string dishId to int using parseInt
                <DishDetail
                    dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
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
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />

                    {/* Use redirect to specify a default route if routes does not match any above routes */}
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

//Connect Main component to redux store by wrapping Main inside a connect function from react-redux
//Surround the connect function with withRouter from react-router to make use of react router
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);
