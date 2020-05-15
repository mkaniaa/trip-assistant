import React from 'react'
import { Card, Icon } from 'react-materialize'

const TripCard = ({ name, icon, date }) => {

    return (
        <Card
            className="trip-card blue-grey-text text-darken-2 z-depth-4 noselect"
            title={ name }
        >
            <Icon 
                large
                className="trip-card-image"
            >
                { icon }
            </Icon>
            <p>{ date }</p>
        </Card>
    )
}

export default TripCard;