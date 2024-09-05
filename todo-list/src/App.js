import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import './Components/heart.js';
function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
