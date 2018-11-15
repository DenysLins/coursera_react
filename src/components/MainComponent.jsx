import React, { Component } from 'react';
import Home from './HomeComponent.jsx';
import Menu from './MenuComponent.jsx';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import { DISHES } from '../shared/dishes.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';


export default class Main extends Component {

    constructor (props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exatc path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
