import React from 'react'


const Contact_item=(props)=>{
	const {name,email,phone}=props;
	return (
		<div className="contact-item">
				<img src={`https://robohash.org/${name}`} alt="hello"/>
				<h3>{name}</h3>
				<p>{phone}</p>
				<p>{email}</p>
		</div>

		
		)
}



export default Contact_item;