import {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// const _ = require("lodash")
import _ from 'lodash';

class TodoMainComponent extends Component{
	constructor(props){
		super(props)
		console.log(this);//TodoMainComponent
		console.log(this.props); //{}
		this.state={
			todo:[]
		}
		console.log(this.todo); //[]
	}

	addTodo=(e)=>{
		e.preventDefault()
		let ob={}
		_.set(ob, "todo", e.target.todo.value);
		_.set(ob, "status", e.target.status.value);
		this.setState({
			todo:this.state.todo.concat(ob)
		})
		console.log(this.state.todo);

		localStorage.setItem("todo_with_lodash", this.state.todo)
	}

	render(){
		return(
			<div>
			<TodoForm addTodo={this.addTodo} />
			<TodoList todo={this.state.todo}/>

			</div>
			)
	}
}
export default TodoMainComponent;