import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoListForm from "./TodoListForm";
import { v4 as uuidv4 } from "uuid";
import EditListForm from "./EditListForm";

export class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: [],
    };
    this.addList = this.addList.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.addEditedData=this.addEditedData.bind(this);
  }

  addList(todoData) {
    let newTodo = [...this.state.workList, todoData];
    this.setState({
      workList: newTodo,
    });
  }

  edit(item) {
    let newTodo = this.state.workList.map((val) => {
      if (val.todo == item.todo) {
        return { ...val, showEditeForm: !val.showEditeForm };
      }
      return val;
    });
    this.setState({
      workList: newTodo,
    });
  }

  showlist() {
    //    console.log("state",this.state.workList);
    return this.state.workList.map((val) => {
      if (val.showEditeForm) {
        return <EditListForm key={uuidv4()}listItem={val}  addEditedData={this.addEditedData} />;
      } else {
        return (
          <TodoList
            key={uuidv4()}
            listItem={val}
            edit={this.edit}
            delete={this.delete}
          />
        );
      }
    });
  }
  delete(item) {
    let NewList = this.state.workList.filter((val) => {
      return val.todo !== item.todo;
    });
    this.setState({
      workList: NewList,
    });
  }
addEditedData(editedData,id){
    const newWorklist=this.state.workList.map((item)=>{
        if(item.id===id){
            return{...item,todo:editedData,showEditeForm:false}
        }
        return item
    })
    console.log("newWorkList",newWorklist);
    this.setState({
      workList:newWorklist
    })
    console.log("edited data",editedData,id);
}
  render() {
    return (
      <div className="TodoListContainer">
        <TodoListForm addList={this.addList} />
        {this.showlist()}
      </div>
    );
  }
}

export default TodoListContainer;
