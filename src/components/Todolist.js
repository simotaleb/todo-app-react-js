import React from 'react';

export default class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {
      list: undefined
    };
  }

  render(){
    const arr = [];
    let cpt = 0;
    this.props.data.forEach((item) => {
      arr.push(<li key={cpt}>{item}</li>)
      cpt++;
    });
    return(
      <div>
        <ul>
          {arr}
        </ul>
      </div>
    );
  }

}
