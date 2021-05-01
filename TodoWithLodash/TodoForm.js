import {Component} from 'react'

class TodoForm extends Component{
constructor(props){
	super(props)
	
	console.log(props) //{addTodo: ƒ}
}

render(){
		return(
			<div>
                <h1>TodoForm</h1>
                <form onSubmit={this.props.addTodo}>
                    <input type="text" name="todo" placeholder="Todo"/>
                    <input type="text" name="status" placeholder="Status"/>
                    <button>Submit</button>
                </form>
			</div>)
	}

}
export default TodoForm;
