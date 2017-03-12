import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

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
      arr.push(<ListGroupItem key={cpt}>
              {item}
              </ListGroupItem>)

      cpt++;
    });
    return(

      <ListGroup>
        {arr}
      </ListGroup>
    );
  }

}
