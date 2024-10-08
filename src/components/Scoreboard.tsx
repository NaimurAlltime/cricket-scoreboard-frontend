// src/components/Scoreboard.tsx
import React from 'react';
import { useGetScoresQuery } from '../redux/features/scoreApi';


const Scoreboard = () => {
    const { data: scores = [], isLoading } = useGetScoresQuery({});
    console.log("s", scores)

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="scoreboard">
            <h1 className="text-2xl">Scores</h1>
            {scores.map((score: any) => (
                <div key={score._id}>
                    <h2>{score.team1} vs {score.team2}</h2>
                    <p>{score.team1}: {score.score1}</p>
                    <p>{score.team2}: {score.score2}</p>
                </div>
            ))}
        </div>
    );
};

export default Scoreboard;
