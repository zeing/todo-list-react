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
        name: 'list 3',
        isCompleted: false,
      },  {
        name: 'list 4',
        isCompleted: true,
      },  {
        name: 'list 5',
        isCompleted: true,
      },
    ],
    showCompletedList: true,
  };

  onToggleCompletedList = () => {
    this.setState({showCompletedList : !this.state.showCompletedList});
  };

  onCreateNewItem = () => {
    const newList =
        {
          name: '',
          isCompleted: false,
        }
    this.setState({lists : [...this.state.lists, newList]});
  };

  // onToggleListItem = (event) => {
  //   const target = event.target;
  //   const valueCheck = target.type === 'checkbox' ? target.checked : null;
  //   const value =  target.type !== 'checkbox' ? target.value : null;
  //   const id = target.id;
  //   const lists = this.state.lists;
  //   if(value !== null) lists[id].name = value;
  //   if(valueCheck !== null) lists[id].isCompleted = valueCheck;
  //   this.setState({ lists: lists })
  // };

  onToggleListItem = (event) => {
    const target = event.target;
    const value = target.checked;
    const id = target.id;
    const lists = this.state.lists;
    lists[id].isCompleted = value;
    this.setState({ lists: lists })
  };

  onEditTask = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    const lists = this.state.lists;
    lists[id].name = value;
    this.setState({ lists: lists })
  };

  onDeleteTask = (event) => {
    // const target = event.target;
    // const id = target.id;
    // const lists = this.state.lists;
    // lists[id].name = value;
    // this.setState({ lists: lists })
  };

  render() {
    this.state.lists.forEach( (list, index ) => { list.id = index});
    const lists = this.state.lists;
    const inCompletedList =  lists.filter( list =>  !list.isCompleted)
    const completedList = lists.filter( list =>  list.isCompleted);
    return (
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-1/3 mb-4">
          <Header onCreateNewItem={this.onCreateNewItem}/>
        </div>
        <div className="w-1/3">
          <CompletedSection onToggleListItem={this.onToggleListItem} onToggleCompletedList={this.onToggleCompletedList} onEditTask={this.onEditTask} lists={completedList} showCompletedList={this.state.showCompletedList}/>
        </div>
        <div className="w-1/3">
          <List onToggleListItem={this.onToggleListItem} onEditTask={this.onEditTask} lists={inCompletedList}/>
        </div>
      </div>
    );
  }
}

export default App;
