import React from 'react'

class State3 extends React.Component{
	constructor(){
		super()
		this.state={
			toggle:true
		}
	}

	handleClick=()=>{
		this.setState(prev=>({toggle:!(prev.toggle)}))
	}

	render(){
		return(
			<div>
			<p>{this.state.toggle?'On':'Off'}</p>
			<button onClick={this.handleClick}>click me</button>
		</div>
			)
	}
}



export default State3