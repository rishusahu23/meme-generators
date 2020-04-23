import React from 'react'
import './List.css'


class TodoItem extends React.Component{


	render()
	{
		const {title,id,completed}=this.props.data;
	return (
		<div className="todo-item" style={{color:(id%2==1)&&"red"}}>
			<input type="checkbox" name="firtcheck" value="first"
			 checked={completed} 
			 onChange={()=>this.props.handleChange(id)}/>
			<label  style={{marginLeft:15  }}>{id}):</label>
	     	<label style={{marginLeft:15}}>{title}</label><br/>
		</div>
		)
	}
}

/*const TodoItem=(props)=>{

	const {title,id,completed}=props.data;
	return (
		<div className="todo-item" style={{color:(id%2==1)&&"#eeeeee"}}>
			<input type="checkbox" name="firtcheck" value="first" checked={completed}/>
			<label  style={{marginLeft:15  }}>{id}):</label>
	     	<label style={{marginLeft:15}}>{title}</label><br/>
		</div>
		)
	}
*/


export default TodoItem;