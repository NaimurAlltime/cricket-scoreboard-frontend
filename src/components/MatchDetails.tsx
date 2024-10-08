import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MatchDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [match, setMatch] = useState<any>(null);

    useEffect(() => {
        const fetchMatchDetails = async () => {
            const response = await fetch(`http://localhost:5000/api/matches/${id}`);
            const data = await response.json();
            setMatch(data);
        };

        fetchMatchDetails();
    }, [id]);

    if (!match) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">{match.teams.join(' vs ')}</h2>
            <p>Status: {match.status}</p>
            <p>Score: {JSON.stringify(match.score)}</p>
        </div>
    );
};

export default MatchDetails;
