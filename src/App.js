import React from 'react';

import './App.css';
import { TodoList } from './features/todos/components/TodoList';
import {AddTodo} from './features/todos/components/AddTodo'
import { Header } from './sharedComponents/Header';

function App() {
  return (
  <div className="App">
      <Header/>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <header className="header"> 
              <AddTodo/>
            </header>
            <ul className="todo-list">
              <TodoList/>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
