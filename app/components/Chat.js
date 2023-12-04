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
                    <div key={index} className={message.isUser ? 'user-message' : 'chewbacca-message'}>
                        {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Entrez votre message..."
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