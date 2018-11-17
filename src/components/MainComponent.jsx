import React, { Component } from 'react';
import Home from './HomeComponent.jsx';
import Contact from './ContactComponent.jsx';
import Menu from './MenuComponent.jsx';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
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
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exatc path="/menu" component={() => <Menu dishes={this.state.dishes} comments={this.state.comments} />} />
                    <Route exatc path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
