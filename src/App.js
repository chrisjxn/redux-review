import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './ducks/todos';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleClick() {
    this.props.addTodo(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    let todos = this.props.todos.map((todo, i) => {
      return <p key={i}>{todo}</p>
    })
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='Type a new todo...' />
        <button
          onClick={this.handleClick}
          type=''
          className=''>Add</button>
        {todos}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(App);

// { addTodo } directly above is ES6 shorthand for { addTodo: addTodo }
