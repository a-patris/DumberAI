import React, { useState } from 'react';
import CharacterSelection from '../components/CharacterSelection';

const Home = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelectCharacter = (characterId) => {
    setSelectedCharacter(characterId);
  };

  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Sélectionnez votre personnage :</h1>
      <CharacterSelection
        selectedCharacter={selectedCharacter}
        onSelectCharacter={handleSelectCharacter}
      />
      {selectedCharacter && (
        <p className="mt-4">Personnage sélectionné : {selectedCharacter}</p>
      )}
    </div>
  );
};

export default Home;