import React from 'react';

const characters = [
    { id: 'groot', name: 'Groot', image: '/assets/Groot.png' },
    { id: 'chewbacca', name: 'Chewbacca', image: '/assets/Chewy.png' },
    { id: 'murloc', name: 'Murloc', image: '/assets/Murloc.png' },
    { id: 'timmy', name: 'Timmy', image: '/assets/Timmy.png' },
];


const CharacterSelection = ({ selectedCharacter, onSelectCharacter }) => {
    return (
        <div className="flex space-x-4 justify-center items-center">
            {characters.map((character) => (
                <button
                    key={character.id}
                    className={`${selectedCharacter === character.id ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        } px-4 py-2 rounded focus:outline-none flex flex-col items-center`}
                    onClick={() => onSelectCharacter(character.id)}
                >
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-20 h-20 mb-2 rounded-full"
                    />
                    {character.name}
                </button>
            ))}
        </div>
    );
};

export default CharacterSelection;