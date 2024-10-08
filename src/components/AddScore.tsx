import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import Modal from './Modal';
import { useAddScoreMutation } from '../redux/features/scoreApi';

const AddScore = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addScore, { isLoading }] = useAddScoreMutation();

    const handleAddScore = async (team1: string, team2: string, score1: number, score2: number) => {
        try {
            await addScore({ team1, team2, score1, score2 }).unwrap();
        } catch (err) {
            console.error('Failed to add score: ', err);
        }
    };

    return (
        <div className='mt-12 mx-auto max-w-screen-2xl'>
            <Scoreboard />
            <button onClick={() => setIsModalOpen(true)} className='bg-green-500 text-white px-3 py-1 rounded-sm mt-3'>Add Score</button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddScore}
            />

            {isLoading && <p>Loading...</p>}
        </div>
    );
};

export default AddScore;
