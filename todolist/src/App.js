import React from 'react';

import { View as Todos } from './todos';
import { View as Filter } from './filter';

class App extends React.Component{
  render(){
    return (
      <div>
        <Todos />
        <Filter /> 
      </div>
    );
  }
}

export default App;