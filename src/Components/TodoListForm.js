import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export class TodoListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      showEditeForm:false,
      id:uuidv4(),
      
    };
    this.handleAddList = this.handleAddList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }
  handleAddList(e) {
    e.preventDefault();
    this.props.addList(this.state);
    this.setState({
      todo: "",
     
    });
  }
  render() {
    return (
      <div className="TodoListForm">
        <form onSubmit={this.handleAddList}>
          <label htmlFor="todoList">New Todo</label>
          <div>
            <input
              type="text"
              name="todoList"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <button>Add Todos!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoListForm;
