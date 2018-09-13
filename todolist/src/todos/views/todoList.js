import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './todoItem';
import { FilterTypes } from '../../constants';
import { removeTodo, toggleTodo } from '../Actions';

class TodoList extends React.Component{
  render(){
    return (
      <ul className="todo-list">
      {
        this.props.todos.map((todo) => (
          <TodoItem
           key = {todo.id}
           text = {todo.text}
           completed = {todo.completed}
           onToggle = {this.props.onToggle.bind(this,todo.id)}
           onRemove = {this.props.onRemove.bind(this,todo.id)} 
          />
        ))
      }
      </ul>
    );
  }
}

function selectTodos(todos, filter){
  switch(filter){
    case FilterTypes.ALL:{
      return todos;
    }
    case FilterTypes.COMPLETED:{
      return todos.filter((todo) => {
        return todo.completed === true;
      });
    }
    case FilterTypes.UNCOMPLETED:{
      return todos.filter((todo) => {
        return todo.completed === false;
      });
    }
    default:{
      console.log('no filter');
      return todos;
    }
  }
}

function mapStateToProps(state, ownProps){
  return {
    todos: selectTodos(state.todos,state.filter)
  };
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    onRemove: (id) => {
      dispatch(removeTodo(id));
    },
    onToggle: (id) => {
      dispatch(toggleTodo(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);