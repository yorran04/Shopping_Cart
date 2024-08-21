import React, {useState} from 'react';
import { IoIosSearch } from "react-icons/io";


import { Formulario } from './styles';
import fethProduts from '../../api/fetchProducts';

function SearchBar() {

  const [serchValue, setSerchValue] = useState('');

  const handleSearch = async (e) =>{
    e.preventDefault();
    
    const products = await fethProduts(serchValue)
    console.log(products)
    setSerchValue('')
  }
  return (
    <Formulario onSubmit={handleSearch}>
        
      <input 
        value={serchValue}
        type="search"
        placeholder="Buscar Produtos"
        className="search_input"
        onChange={(e) => {setSerchValue(e.target.value)}}
        required
      />
      
      <button type="submit" className="search_button">
        <IoIosSearch/>
      </button>

    </Formulario>
  );
}

export default SearchBar;