import React from 'react'

class State4 extends React.Component{

	constructor(){
		super()
		this.state={
			hover:false
		}
	}
	handleClick=()=>{
		this.setState(prev=>{
			return{
				hover:!prev.hover
			}
		})
	}

	render(){
		return(



			<div >
				<img src="https://robohash.org/rishu" 
				alt="rishu"
				/>
				<button onMouseOver={this.handleClick}>click me</button>
				<p>{this.state.hover?"hoverd":null}</p>
			</div>
			)
	}
}



export default State4