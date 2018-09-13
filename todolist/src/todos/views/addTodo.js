import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../Actions';

class AddTodo extends React.Component{
  constructor(props, context){
    super(props,context);
    this.refInput = this.refInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render(){
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    );
  }
  refInput(node){
    this.input = node;
  }
  onSubmit(e){
    e.preventDefault();
    const text = this.input.value.trim();
    if(!text){
      return;
    }
    this.props.onAdd(text);
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);