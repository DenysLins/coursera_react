import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default class DishDetail extends Component {

    renderDish(dish) {
        return (
            <CardBody>
                <CardTitle >{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        );
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            {this.renderDish(dish)}
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}
