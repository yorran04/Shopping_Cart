import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

import { Botao } from './styles';

function CartButton() {
  return (
    <Botao >
      <FiShoppingCart />
      <span>1</span>   
    </Botao>
  );
}


export default CartButton;