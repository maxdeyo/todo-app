import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './components/create-todo-component';
import EditTodo from './components/edit-todo-component';
import TodosList from './components/todo-list-component';
import CalendarPage from './components/calendar-page-component';
import LoginPage from './components/login-components/login-page';
import CreateAccount from './components/login-components/create-account';


function App() {
  return (
    <Router>
      <div className="container">

        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='/' className='navbar-brand'>To Do App</Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>Todos</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/create' className='nav-link'>Create</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/calendar' className='nav-link'>Calendar</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/login' className='nav-link'>Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path='/' exact component={TodosList} />
        <Route path='/edit/:id' component={EditTodo} />
        <Route path='/create' component={CreateTodo} />
        <Route path='/calendar' component={CalendarPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={CreateAccount} />
      </div>
    </Router>
  );
}

export default App;
