import React, { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const getRandomResponse = (character) => {
    const responsesByCharacter = {
        groot: ["Je s'appelle Groot!", "Je s'appelle GROOOOOOOOOT!", "Je s'appelle GrooOoOOOOooooOOot!"],
        chewbacca: [
            'Uuuuuuuuuur Ahhhhrrrrr Uhrrrr Ahhhhrrrrrrr Aaaarhg',
            'Aaarrragghuuhw Aaaargh',
            'Hruuahhrrr Ahhhr',
        ],
        murloc: ['Glllglllgl!', 'Mrglglglg!', 'Mrrglllgl!'],
        timmy: ['Timmy!', 'TIMMY!', 'Timmyyyyyyy!!!!'],
        r2d2: ['Beep boop beep!', 'Bleep bloop!', 'Bleeep beeep boop!'],
    };

    const responses = responsesByCharacter[character] || [];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
};


const Chat = ({ character }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (content, isUser = false) => {
        setMessages((prevMessages) => [...prevMessages, { content, isUser }]);
    };

    const [loading, setLoading] = useState(false);

    const simulateResponse = (userMessage) => {
        setLoading(true);

        const response = getRandomResponse(character);
        const delay = Math.min(1000 + userMessage.length * 50, 5000);

        setTimeout(() => {
            addMessage(response);
            setLoading(false);
        }, delay);
    };

    const handleSendMessage = (userMessage) => {
        addMessage(userMessage, true);
        simulateResponse(userMessage);
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {loading && (
                    <div className="loader-container">
                        <SyncLoader color={'#36D7B7'} loading={loading} size={10} />
                    </div>
                )}
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${message.isUser ? 'bg-gray-300 text-gray-800' : 'bg-gray-500 text-white'
                            } p-2  mb-2`}
                    >
                        {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Entrez votre message..."
                className="w-full p-4 border border-grey-500 text-lg mt-4"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSendMessage(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
};

export default Chat;