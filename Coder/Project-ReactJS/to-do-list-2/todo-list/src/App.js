import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Buy a bimbim' },
        { title: 'Go f*cking like Dante' },
        { title: 'Learn ReactJS' }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);

    this.inputElement = React.createRef();
  };

  componentDidMount() {
    debugger;
    this.inputElement.current.focus()
  }

  onItemClicked(item) {
    return (event) => {
      console.log(1);
      const isComplete = item.isComplete;
      const { todoItems } = this.state
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }


  onKeyUp(event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text || text === "") {
        return;
      }
      text = text.trim();
      if (!text) { return; }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <header className="App-header">
            <table>
              <tbody>
                <tr>
                  <td><img src={logo} className="App-logo" alt="logo" /></td>
                  <td><h1 className="main-title">todos</h1></td>
                </tr>
              </tbody>
            </table>

            <section className="todoapp">
              <div className="header" data-reactid=".0.0">
                <label className="toggle-all"></label>
                <input className="new-todo"
                  placeholder="What needs to be done?"
                  value={newItem}
                  onChange={this.onChange}
                  onKeyUp={this.onKeyUp}
                  ref={this.inputElement}
                />
              </div>

              <div className="TodoItemWrapper todo-list">
                {
                  todoItems.length && todoItems.map(
                    (item, index) => <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />)
                }
              </div>
            </section>

          </header>
        </div >
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Nothing here.
          </header>
        </div>
      )
    }
  }
}

TodoItem.propType = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired
}

export default App;
