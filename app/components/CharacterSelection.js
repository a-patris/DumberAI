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
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center space-x-4 mb-4">
                {characters.map((character) => (
                    <button
                        key={character.id}
                        className={`${selectedCharacter === character.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 hover:bg-blue-500 hover:text-white'
                            } px-4 py-2 rounded focus:outline-none flex flex-col items-center mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6`}
                        onClick={() => handleSelectCharacter(character.id)}
                    >
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-12 h-20 object-cover mb-2 sm:h-20"
                        />
                        {character.name}
                    </button>
                ))}
                <button
                    className={`${selectedCharacter
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 hover:bg-blue-500 hover:text-white'
                        } px-4 py-2 rounded focus:outline-none flex flex-col items-center mb-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6`}
                    onClick={() => handleSelectCharacter()}
                >
                    <img
                        src='/assets/images/random.png'
                        alt='Random character'
                        className="w-12 h-20 object-cover mb-2 sm:h-20"
                    />
                    Le conseil ultime
                </button>
            </div>
            <button
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleValidation}
                disabled={!selectedCharacter}
            >
                Valider la sélection
            </button>
        </div>
    );
};

export default CharacterSelection;
