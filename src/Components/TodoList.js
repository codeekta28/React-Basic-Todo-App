import React, { Component } from 'react'
import EditListForm from './EditListForm';

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
    }
    handleDelete(){
        this.props.delete(this.props.listItem)
    }
    handleEdit(){
         this.props.edit(this.props.listItem)
    }

  render() {
      const{listItem}=this.props
    return (
      <div className='TodoList'>
        <p>{listItem.todo}</p>
        <span onClick={this.handleEdit}>Edit</span>
        <span onClick={this.handleDelete}>Delete</span>
      </div>
    )
  }
}

export default TodoList