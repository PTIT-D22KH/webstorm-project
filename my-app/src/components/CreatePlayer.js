import React, { useState } from 'react';
import PlayerService from '../services/PlayerService';

const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const player = { name, country, age, position };
        PlayerService.createPlayer(player)
            .then(response => {
                console.log('Player created:', response.data);
            })
            .catch(error => {
                console.error('Error creating player:', error);
            });
    };

    return (
        <div>
            <h1>Create Player</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Country:</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Position:</label>
                    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreatePlayer;