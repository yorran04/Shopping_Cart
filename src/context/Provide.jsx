import React from "react";  
import propTypes from 'prop-types'
import AppContext from "./AppContext";

function Provider({children}){
  return(
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
}


export default Provider;

Provider.prototype = {
  children: propTypes.any
}.isRequired;