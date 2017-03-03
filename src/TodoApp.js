import React from 'react';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';

export default class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.handleItem = this.handleItem.bind(this);
  }

  handleItem(item){
    this.setState( (state) => {
      state.data = state.data.concat([item]);
      return state;
    });
  }

  render(){
    return(
      <div>
        <h1>ToDo App!</h1>
        <Addtodo onAdditem={this.handleItem} />
        <Todolist data={this.state.data}/>
      </div>
    );
  }
}
