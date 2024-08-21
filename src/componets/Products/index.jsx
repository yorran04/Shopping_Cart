import React, {useState, useEffect} from 'react';

import { SectionProducts } from './styles';
import fethProduts from '../../api/fetchProducts';

import {Loading} from '../Loading'
import { ProductCard } from '../ProductCard';

export function Products() {

  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    
    fethProduts('iphone').then((response) => {

      setProducts(response);
      setLoading(false)
    });
  },[]);


  return (
    
    (loading ? <Loading/> : <SectionProducts className='container'>
   
     
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
     
      }
    </SectionProducts> )
       
    
  ); 
}