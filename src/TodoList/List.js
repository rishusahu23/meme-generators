import React from 'react'
import './List.css'
import TodoItem from './TodoItem'
import JsonTodos from './JsonTodos'

class List extends React.Component{
	constructor(){
		super()
		this.state={
			todos:JsonTodos
		}
	}

	handleChange=(id)=>{
		this.setState(prev=>{
			const newTodos=prev.todos.map(todo=>{
				if(todo.id===id)
				{todo.completed=!todo.completed}
				return todo	
			})
			return{todos:newTodos}
		})

	}

	render(){
		const newList=this.state.todos.map(data=> {
			return <TodoItem  id={data.id} data={data}
			handleChange={this.handleChange} />
		}
			
			)

		return(
			<div className="todo-list">
				{newList}
			</div>
			)

}
}
export default List;
/*const List=()=>{

	const newList=JsonTodos.map((data)=>
		<TodoItem id={data.id} data={data} />
		)
	return (
		<div className="todo-list">
	     	{newList}
			
	    </div>
		)
}*/

