import React, { useEffect, useState } from 'react';
import PlayerService from '../services/PlayerService';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        PlayerService.getAllPlayers()
            .then(response => {
                setPlayers(response.data);
            })
            .catch(error => {
                console.error('Error fetching players:', error);
            });
    }, []);

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;