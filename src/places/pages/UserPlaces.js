import React from 'react';
import { useParams } from "react-router-dom";

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Washington Monumnet',
        description: 'Landmark obelisk rising from the National Mall that honors America\'s first president.',
        imageUrl: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0MzI4MDQyMzgwODYyOTgx/gettyimages-1133774747.jpg',
        address: '2 15th St NW, Washington, DC 20024',
        location: {
            lat: 38.8894838, 
            lng: -77.0396565
        }, 
        creator: 'u1'
    },

    {
        id: 'p2',
        title: 'Los Angeles County Museum of Art',
        description: 'This 20-acre campus with diverse collections spanning art history also offers screenings & concerts.',
        imageUrl: 'https://a.cdn-hotels.com/gdcs/production27/d1205/e771c8f0-d401-4969-aa59-ef6ff7802da2.jpg',
        address: '5905 Wilshire Blvd, Los Angeles, CA 90036',
        location: {
            lat: 34.0639296, 
            lng: -118.3589711
        }, 
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    console.log(userId);
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;