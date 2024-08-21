import React from "react";

import Header from "./componets/Header";
import { Products } from "./componets/Products";
import Provider from "./context/Provide";


function App() {

  return (
    <Provider>
      <Header/>
      <Products/>
    </Provider>
  );
}

export default App;
