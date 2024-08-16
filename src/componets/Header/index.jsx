import React from 'react';

import { Cabecalho } from './styles';
import SearchBar from '../SearchBar';
import CartButton from '../CartButton';

function Header() {
  return (
    <Cabecalho>
      <div className='container'>
        <SearchBar/>
        <CartButton/>
      </div>
    </Cabecalho>
  );
}

export default Header;