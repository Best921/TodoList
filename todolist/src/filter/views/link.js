import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../Actions';

class Link extends React.Component{
  render(){
    if(this.props.active){
      return (
        <b className="filter selected">
          {this.props.children}
        </b>
      );
    }else{
      return (
        <a href="#" className="filter not-selected" onClick={this.props.handleClick}>
          {this.props.children}
        </a>
      );
    }
  }
}

function mapStateToProps(state, ownProps){
  return {
    active: state.filter === ownProps.filter
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    handleClick: (e) => {
      e.preventDefault();
      dispatch(setFilter(ownProps.filter));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);