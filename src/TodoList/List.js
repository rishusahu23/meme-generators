import React from 'react'
import './List.css'
import TodoItem from './TodoItem'
const List=()=>{
	return (
		<div className="todo-list">
	     	<TodoItem/>
	     	<TodoItem/>
	     	<TodoItem/>
	     	<TodoItem/>
			
	    </div>
		)
}

export default List;