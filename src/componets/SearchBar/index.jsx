import React, {useState} from 'react';
import { IoIosSearch } from "react-icons/io";


import { Formulario } from './styles';

function SearchBar() {

  const [serchValue, setSerchValue] = useState('');

  return (
    <Formulario>
        
      <input 
        value={serchValue}
        type="search"
        placeholder="Buscar Produtos"
        className="search_input"
        onChange={(e) => {setSerchValue(e.target.value)}}
        required
      />
      {serchValue}
      <button type="submit" className="search_button">
        <IoIosSearch/>
      </button>

    </Formulario>
  );
}

export default SearchBar;