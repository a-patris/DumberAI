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
        <div className="container max-w-full h-screen flex flex-col text-center">
            <div className="mx-4 md:mx-20 my-4 md:my-10">
                <div className='flex flex-row items-center'>
                    <button
                        onClick={handleReturn}
                        className="bg-transparent text-black px-4 md:px-6"
                    >
                        <span className="mr-2">&#8592;</span>
                    </button>
                    <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                        Bienvenue dans le chat IA, le plus important de votre formation
                    </h1>
                </div>
                {character && (
                    <div className="flex justify-center md:justify-end mb-2 md:mb-4">
                        <img src={`/assets/${character}.png`} alt={character} className="w-16 h-16 md:w-20 md:h-20" />
                    </div>
                )}
            </div>
            <Chat character={character} />
        </div>

    );
};

export default ChatPage;
