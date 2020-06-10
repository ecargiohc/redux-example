import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
import store from './store';
import Posts from './components/Posts'; 
import PostForm from './components/PostForm';

// const store = createStore(() =>  [], {}, applyMiddleware())

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <PostForm />
        <hr />
        <Posts />
      </header>
    </div>
    </Provider>
  );
}

export default App;
