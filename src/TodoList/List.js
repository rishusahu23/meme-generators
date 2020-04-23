import React from 'react'
import './List.css'
import TodoItem from './TodoItem'
import JsonTodos from './JsonTodos'

const List=()=>{

	const newList=JsonTodos.map((data)=>
		<TodoItem id={data.id} data={data} />
		)
	return (
		<div className="todo-list">
	     	{newList}
			
	    </div>
		)
}

export default List;