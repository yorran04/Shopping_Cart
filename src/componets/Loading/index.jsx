import React from 'react';

import { Content } from './styles';
import { LuLoader2 } from "react-icons/lu";

export function Loading() {
  return(
    <Content>
      <LuLoader2 className='loading'/>
    </Content>
  )
}