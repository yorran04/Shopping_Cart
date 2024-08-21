import React from 'react';
import PropTypes from "prop-types"

import { FaCartPlus } from "react-icons/fa";

import { Container, Content } from './styles';
import formatCurrency from '../../utils/formatCurrency';

export function ProductCard({data}) {

  const {title, thumbnail, price} = data;
  return (
    <Container>
      <Content>
        <img alt='produtos' src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}></img>
        <div className='card_infos'>
          <h2 className='card_price'>{formatCurrency(price, "BRL")}</h2>
          <h2 className='card_title'>{title}</h2>
        </div>
        <button type='button'>
          <FaCartPlus/>
        </button>
      </Content>
    </Container>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape(),
}.isRequired