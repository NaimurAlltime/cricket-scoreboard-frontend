import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl">Page Not Found</h2>
            <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
