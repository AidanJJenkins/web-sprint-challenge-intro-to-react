import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character.js'
import styled from 'styled-components'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(res => setPeople(res.data))
      .catch(err => console.log(err))
  }, [])
    
  const CharacterWrapper = styled.div`
    display: inline-block;
    border-radius: 6.9px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
  `;
 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {people.map(person => (
          <CharacterWrapper key={person.name}>
            <Character person={person} />
          </CharacterWrapper>
        ))}
      </div>
    </div>
  );
}

export default App;
