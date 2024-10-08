
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (team1: string, team2: string, score1: number, score2: number) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [team1, setTeam1] = React.useState('');
    const [team2, setTeam2] = React.useState('');
    const [score1, setScore1] = React.useState(0);
    const [score2, setScore2] = React.useState(0);

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSubmit(team1, team2, score1, score2);
        onClose();
        // Reset fields
        setTeam1('');
        setTeam2('');
        setScore1(0);
        setScore2(0);
        window.location.reload()
    };

    return (
        <div className="modal">
            <div className="modal-content mt-4">
                <h2>Add Score</h2>
                <input type="text" value={team1} onChange={(e) => setTeam1(e.target.value)} placeholder="Team 1" />
                <input type="text" value={team2} onChange={(e) => setTeam2(e.target.value)} placeholder="Team 2" />
                <input type="text" value={score1} onChange={(e) => setScore1(Number(e.target.value))} placeholder="Score 1" />
                <input type="text" value={score2} onChange={(e) => setScore2(Number(e.target.value))} placeholder="Score 2" />
                <button onClick={handleSubmit} className='bg-blue-500 text-white px-3 py-1 rounded-sm'>Submit</button>
                <button onClick={onClose} className='bg-red-500 text-white px-3 py-1 rounded-sm'>Cancel</button>
            </div>
        </div>
    );
};

export default Modal;
