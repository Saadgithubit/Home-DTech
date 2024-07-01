import React from 'react';
import Link from 'next/link';
import ButtonComponent from '@/components/button';

const NotFound: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-4">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="space-x-4">
                <Link href="/">
                    <ButtonComponent title={'Go Home'} />
                </Link>
            </div>
        </div>
    );
};

export default NotFound;