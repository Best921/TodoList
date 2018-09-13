import React from 'react';

class TodoItem extends React.Component{
  render(){
    const checked = this.props.completed === true;
    return (
      <li
        className="todo-item"
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        <input 
          className="toggle" 
          type="checkbox" 
          readOnly 
          onClick={this.props.onToggle} 
          checked={checked}                                
        />
        <label className="text">{this.props.text}</label>
        <button className="remove" onClick={this.props.onRemove}>×</button>
      </li>
    );
  }
}

export default TodoItem;