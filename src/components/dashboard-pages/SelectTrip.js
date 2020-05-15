import React from 'react'
import { Carousel } from 'react-materialize'
import TripCard from './TripCard'

const SelectTrip = () => {
    return (
        <Carousel
            carouselId="Carousel-2"
            className="trip-card-carousel center"
            options={{
                indicators: true,
                numVisible: 5,
                noWrap: true,
                duration: 500,
                dist: -50
            }}
        >
            <div >
                <TripCard 
                    name="Mazurski rejs"
                    icon="directions_boat"
                    date="01.08.2020 - 15.08.2020"
                />
            </div>
            <div>
                <TripCard 
                    name="Górska przygoda"
                    icon="landscape"
                    date="01.03.2021 - 07.03.2021"
                />
            </div>
            <div>
                <TripCard 
                    name="Wycieczka rowerowa"
                    icon="directions_bike"
                    date="01.05.2020 - 03.05.2020"
                />
            </div>
            <div>
                <TripCard 
                    name="Eurotrip"
                    icon="airport_shuttle"
                    date="21.04.2021 - 01.05.2021"
                />
            </div>
            <div>
                <TripCard 
                    name="Create new trip..."
                    icon="add"
                    date="01.08.2020 - 15.08.2020"
                />
            </div>
        </Carousel>
    )
}

export default SelectTrip;