import React from 'react';
import { useRouter } from 'next/router';
import Chat from '../components/Chat';

const ChatPage = () => {
    const router = useRouter();
    const { character } = router.query;

    const handleReturn = () => {
        router.push('/');
    };

    return (
        <div className="container max-w-full h-screen flex justify-between flex-col text-center">
            <div className="mx-20 my-10">
                <div className='flex flex-row items-center'>
                    <button
                        onClick={handleReturn}
                        className="bg-transparent text-black px-6 "
                    >
                        <span className="mr-2">&#8592;</span>
                    </button>
                    <h1 className="text-4xl font-bold mb-4">
                        Bienvenue dans le chat IA, le plus important de votre formation
                    </h1>
                </div>
                {character && (
                    <div className="flex justify-end mb-4">
                        <img src={`/assets/${character}.png`} alt={character} className="w-20 h-20" />
                    </div>
                )}
            </div>
            <Chat character={character} />
        </div>
    );
};

export default ChatPage;
