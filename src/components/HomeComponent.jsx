import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent.jsx';
import { baseUrl } from '../shared/baseUrl.jsx';


const RenderCard = ({ item, isLoading, errorMessage }) => {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errorMessage) {
        return (
            <h4>{errorMessage}</h4>
        );
    }
    else
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
};

const Home = (props) => {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errorMessage={props.dishesErrorMessage} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errorMessage={props.promoErrorMessage} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errorMessage={props.leadersErrorMessage} />
                </div>
            </div>
        </div>
    );
};

export default Home;
