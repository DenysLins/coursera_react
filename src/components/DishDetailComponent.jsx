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

    renderComments(array) {

        if (array != null) {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const commentList = array.map(c => {
                const date = new Date(c.date);
                return (
                    <div key={c.id}>
                        <li className="mb-3">{c.comment}</li>
                        <li className="mb-3">-- {c.author}, {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</li>
                    </div>
                );
            });

            return (
                <div className="list-unstyled">
                    <h4>Comments</h4>
                    {commentList}
                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
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
                        {this.renderComments(dish.comments)}
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
