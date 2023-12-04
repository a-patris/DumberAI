import React, { useState } from 'react';

export const characters = [
    { id: 'groot', name: 'Groot', image: '/assets/groot.png', audio: '/assets/groot.mp3' },
    { id: 'chewbacca', name: 'Chewbacca', image: '/assets/chewbacca.png', audio: '/assets/chewy.mp3' },
    { id: 'murloc', name: 'Murloc', image: '/assets/murloc.png', audio: '/assets/murloc.mp3' },
    { id: 'timmy', name: 'Timmy', image: '/assets/timmy.png', audio: '/assets/timmy.mp3' },
    { id: 'r2d2', name: 'R2-D2', image: '/assets/r2d2.png', audio: '/assets/R2D2.mp3' },
    { id: 'pikachu', name: 'Pikachu', image: '/assets/pikachu.png', audio: '/assets/pikachu.mp3' },
    { id: 'leonidas', name: 'Leonidas', image: '/assets/leonidas.png', audio: '/assets/leonidas.mp3' },
    { id: 'bob', name: 'Silent Bob', image: '/assets/bob.png', },

];

const CharacterSelection = ({ onSelectCharacter, onValidation }) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const handleSelectCharacter = (characterId) => {
        setSelectedCharacter(characterId);
        onSelectCharacter(characterId);
    };

    const handleValidation = () => {
        onValidation(selectedCharacter);
        const selectedCharacterObject = characters.find((character) => character.id === selectedCharacter);

    };

    return (
        <div className="flex space-x-4 justify-center items-center flex-col">
            <div className="flex space-x-4 mb-4">
                {characters.map((character) => (
                    <button
                        key={character.id}
                        className={`${selectedCharacter === character.id ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            } px-4 py-2 rounded focus:outline-none flex flex-col items-center`}
                        onClick={() => handleSelectCharacter(character.id)}
                    >
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-20 h-20 mb-2"
                        />
                        {character.name}
                    </button>
                ))}
            </div>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleValidation}
                disabled={!selectedCharacter}
            >
                Valider la sélection
            </button>
        </div>
    );
};

export default CharacterSelection;
