import React, { Component } from 'react';
import Menu from './MenuComponent.jsx';
import DishDetail from './DishdetailComponent.jsx';
import Header from './HeaderComponent.jsx';
import Footer from './FooterComponent.jsx';
import { DISHES } from '../shared/dishes.jsx';


export default class Main extends Component {

    constructor (props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelected(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}
