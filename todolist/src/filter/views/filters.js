import React from 'react';

import Link from './link';
import { FilterTypes } from '../../constants';
import './style.css';

class Filters extends React.Component{
  render(){
    return (
      <div className="filters">
        <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
        <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
        <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
      </div>
    );
  }
}

export default Filters;