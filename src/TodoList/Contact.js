import React from 'react'
import ContactItem from './ContactItem.js'
import {JsonItems} from './JsonItems'

const Contact=()=>{
	//const JsonItems=[{name:"rishu"},{name:"sahu"}]
	const newList=JsonItems.map((data)=>
		<ContactItem  key={data.id} name={data.name} email={data.email} body={data.body}/>
			
		);
	return (

		<div className="flex-container">
		{newList}
			
			{/*<ContactItem name="shubash"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem  name="rishu sahu"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="rishu"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="sonu"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem  name="naval"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="shubash"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="vasudeva"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem  name="shubash"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="nitya"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="shubash"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem  name="hello"  email="subhash23@gmail.com" phone="8787217642"/>
			<ContactItem name="sahu"  email="subhash23@gmail.com" phone="8787217642"/>
			*/}
		</div>
		)
}

export default Contact;/*<ContactItem  key={data.id} name={data.name} email={data.email} body={data.body}/>*/