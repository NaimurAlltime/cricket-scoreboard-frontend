import React from 'react';
import Scoreboard from '../components/Scoreboard';

const Home: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold">Welcome to the Cricket Scoreboard</h1>
            <Scoreboard />
        </div>
    );
};

export default Home;
