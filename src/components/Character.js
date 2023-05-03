// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Character = (props) => {
  const CharacterName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  `;

  return (
    <CharacterName className="Characters">
      <p className="Character">{props.person.name}</p>
    </CharacterName>
  );
}

export default Character;
