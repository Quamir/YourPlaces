import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Mark Lamane', 
            image: 'https://images.fineartamerica.com/images-medium-large-5/sunny-beach-tropical-ocean-konradlew.jpg', 
            places: 3
        }
    ]
    return <UsersList items={USERS}/>;
};

export default Users;