import React from 'react';
import { useSelector } from 'react-redux';

interface Match {
    id: number;
    teams: string[];
    status: string;
}

const MatchList: React.FC = () => {
    const matches = useSelector((state: any) => state.matches.matches);

    return (
        <div>
            {matches.map((match: Match) => (
                <div key={match.id}>
                    <h2>{match.teams.join(' vs ')}</h2>
                    <p>Status: {match.status}</p>
                </div>
            ))}
        </div>
    );
};

export default MatchList;
