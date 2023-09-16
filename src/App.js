import imgRickMorty from './img/rick-morty.png'
import './App.css';
import {useState} from 'react';
import Characters from './components/Characters';

function App() {
  const [chars, setChars] =useState(null);
  
  const searchApi = async () =>{
      const apiChar = await fetch('https://rickandmortyapi.com/api/character')
      const apiCharJSON = await apiChar.json();
      // console.log(apiChar);
      // console.log(apiCharJSON);

      setChars(apiCharJSON.results);

  }; 

  console.log(chars);
  return (
  

     <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
      
        {chars ? (
        <Characters characters={chars} setCharacters={setChars}/>
        ) : (
        <>
          <img src={imgRickMorty} alt="Rick & Morty" className="img-home"/>
          <button onClick={searchApi} className="btn-search">Buscar personajes</button></>  
        )}

      </header>
    </div>
  );
}

export default App;
