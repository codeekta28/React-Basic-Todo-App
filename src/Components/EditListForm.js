import React, { Component } from "react";

export class EditListForm extends Component {
    constructor(props){
        super(props);
        this.state={
            newTask:this.props.listItem.todo,
        }
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            newTask:e.target.value,
        })
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.addEditedData(this.state.newTask,this.props.listItem.id)
        this.setState({
          newTask:"",
        })
    }
  render() {
    return (
      <div className="EditListForm">
        <form onSubmit={this.handleUpdate}>
          <div>
            <input
              type="text"
              name="newtask"
              value={this.state.newTask}
              onChange={this.handleChange}
            />
            <button>Add!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditListForm;
