import React from 'react'
import ContactItem from './ContactItem.js'
import JsonItems from './JsonItems'

class Contact extends React.Component{
	constructor(){
		super()
		this.state={
			todos:JsonItems
		}
	}

	render(){
		const newList=this.state.todos.map((data)=>
			(<ContactItem id={data.id} data={data}/>))
			return(
				<div className="flex-container">{newList}</div>
				)

		}
}

export default Contact/*<ContactItem  key={data.id} name={data.name} email={data.email} body={data.body}/>*/