import React, { Component } from 'react';
import Home from './HomeComponent.jsx';
import Contact from './ContactComponent.jsx';
import Menu from './MenuComponent.jsx';
import DishDetail from './DishDetailComponent.jsx';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import About from './AboutComponent.jsx';
import { DISHES } from '../shared/dishes.jsx';
import { COMMENTS } from '../shared/comments.jsx';
import { PROMOTIONS } from '../shared/promotions.jsx';
import { LEADERS } from '../shared/leaders.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';


export default class Main extends Component {

    constructor (props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
