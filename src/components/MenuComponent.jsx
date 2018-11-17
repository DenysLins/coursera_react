import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent.jsx';

const RenderMenuItem = ({ dish, onClick }) => {
    return (
        <Card onClick={() => onClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle >{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
export default class MenuComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={(dish) => this.onDishSelect(dish)} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                    <DishDetail dish={this.state.selectedDish} comments={this.props.comments} />
                </div>
            </div>
        );
    }
}
