import React from 'react';

export default class Addtodo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      item:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({item:e.target.value});
  }
  handleSubmit(e){
    //alert(this.state.item);
    this.props.onAdditem(this.state.item);
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.item} onChange={this.handleChange}/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}
