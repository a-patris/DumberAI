import React from 'react';
import CharacterSelection from '../components/CharacterSelection';
import { useRouter } from 'next/router';
import { characters } from '../components/CharacterSelection';
const Home = () => {
  const router = useRouter();

  const handleCharacterSelect = (characterId) => {
    const selectedCharacter = characters.find((character) => character.id === characterId);
    console.log(`J'ai choisi ${selectedCharacter.name} `);
  };

  const handleValidation = (selectedCharacter) => {
    if (selectedCharacter) {
      router.push(`/chatPage?character=${selectedCharacter}`);
    }
  };

  return (
    <div className="container flex flex-col mx-auto text-center h-screen justify-center">
      <h1 className="text-4xl font-bold mb-4">Sélectionnez votre personnage :</h1>
      <CharacterSelection onSelectCharacter={handleCharacterSelect} onValidation={handleValidation} />
    </div>
  );
};

export default Home;
