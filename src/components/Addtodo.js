import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Addtodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item:'',
      errorMessage: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({item:e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.item.length!==0){
      this.props.onAdditem(this.state.item);
      this.setState({item:'',errorMessage:''});
    }else{
      //this.refs.errorMessage.value = 'task empty';
      this.setState({errorMessage:'To do Item can not be empty!'});
      //console.log(this.refs.errorMessage.value);
    }
    //alert(this.state.item);


  }
  render(){
    return(
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="Task" hidden>Task</Label>
          <Input type="text" value={this.state.item} onChange={this.handleChange} placeholder="Task"/>
        </FormGroup>
        {' '}
        <Label>{this.state.errorMessage}</Label>
        {' '}
        <Button>Add!</Button>
      </Form>


    );
  }
}
