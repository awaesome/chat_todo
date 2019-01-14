import React, { Component } from 'react';
import './App.css';
import TodoAddForm from './components/containers/TodoAddForm'
import TodoList from './components/containers/TodoList'
import Layout from './components/layout'
import ChatLayout from './components/layout/layoutChat'
import TodoLayout from './components/layout/layoutTodo'
import Chat from './components/containers/Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
				<Layout>
					<ChatLayout>
						<Chat />
					</ChatLayout>
					<TodoLayout>
						<TodoAddForm />
						<hr />
						<TodoList />
					</TodoLayout>
				</Layout>
      </div>
    );
  }
}

export default App;
