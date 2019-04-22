import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import List from './components/List'
import Header from './components/Header'
import CompletedSection from './components/CompletedSection'

class App extends Component {
  state  = {
    lists: [
      {
        name: 'list 1',
        isCompleted: true,
      },  {
        name: 'list 2',
        isCompleted: false,
      },  {
        name: 'wdfwefwef ef',
        isCompleted: false,
      },  {
        name: 'wdfwefwef wef',
        isCompleted: true,
      },  {
        name: 'wdfwefwwef ef',
        isCompleted: true,
      },
    ],
    showCompletedList: true,
  };

  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-1/3 mb-4">
          <Header/>
        </div>
        <div className="w-1/3">
          <CompletedSection lists={this.state.lists}/>
        </div>
        <div className="w-1/3">
          <List lists={this.state.lists}/>
        </div>
      </div>
    );
  }
}

export default App;
