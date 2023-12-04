import React from 'react';
import { useRouter } from 'next/router';
import Chat from '../components/Chat';


const ChatPage = () => {
    const router = useRouter();
    const { character } = router.query;

    return (
        <div className="container mx-auto my-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Bienvenue dans le chat IA, le plus important de votre formation</h1>
            {character && (
                <div className="flex justify-end mb-4">
                    <img
                        src={`/assets/${character}.png`}
                        alt={character}
                        className="w-16 h-16 rounded-full"
                    />
                </div>
            )}
            <Chat character="chewbacca" />
        </div>
    );
};

export default ChatPage;