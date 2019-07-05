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
import { postComment, fetchDishes, fetchPromos, fetchComments, fetchLeaders } from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments()),
        fetchPromos: () => dispatch(fetchPromos()),
        fetchLeaders: () => dispatch(fetchLeaders()),
        // actions.reset is imported from react-redux-form which adds necessary action to reset the form
        resetFeedbackForm: () => dispatch(actions.reset("feedback"))
    };
};

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
    // Called just after the component gets mounted into the view of the application
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    //states defined in redux store becomes available as props instead of state because of mapStateToProps function
    render() {
        // declare HomePage component
        const HomePage = () => {
            return (
                // Pass featured dish, promotion and leader from the gven data
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMes={this.props.dishes.dishesErrMes}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promoErrMes={this.props.promotions.errmes}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMes={this.props.leaders.errmes}
                />
            );
        };

        // match is one of the three params provided by React router which holds the route and its params info
        const DishWithId = ({ match }) => {
            return (
                // Parse the string dishId to int using parseInt
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMes={this.props.dishes.dishesErrMes}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMes={this.props.comments.errmes}
                    postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                <Header />

                {/* Switch the components bases on the routes defined */}
                <Switch>
                    {/* Render the home component if route matches to /home */}
                    <Route path='/home' component={HomePage} />

                    {/* Render the menu component if route exactly matches to /menu */}
                    {/* To pass props with the component, needs to be defined like below */}
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />

                    {/* Use redirect to specify a default route if routes does not match any above routes */}
                    <Redirect to='/home' />
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
