import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key:'',
        date:' '
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleInputDate = this.handleInputDate.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.setUpdateDate = this.setUpdateDate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now(),
        date:this.state.currentItem.date,
      }
    })
  }
  handleInputDate(e){
    this.setState({
      currentItem:{
        text:this.state.currentItem.text,
        key:this.state.currentItem.key,
        date:e.target.value,
      }
    })
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    })
    this.setState({
      items:filteredItems,
    })
  }
  setUpdate(value,key){
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.text = value;
      }
    })
    this.setState({
      items:items,
    })
  }
  setUpdateDate(value,key){
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.date = value;
      }
    })
    this.setState({
      items:items,
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ''){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:'',
          date:' '
        }
      })
    }
  }
  render (){
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Escreva um texto" value={this.state.currentItem.text}
            onChange={this.handleInput} >
            </input>
            <input type="date" value={this.state.currentItem.date} onChange={this.handleInputDate}></input>
            <button type="submit">
             Salvar
            </button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} setUpdateDate={this.setUpdateDate}></ListItems>
      </div>
    );
  };
}

export default App;
