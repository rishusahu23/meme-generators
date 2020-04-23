import React from 'react'


class State2 extends React.Component{
	constructor(){
		super()
		this.state={
			count:0
		}
	}

	handleClick=()=>{
		this.setState(prev=>
			({
				count:prev.count+1
			})
		)
	}


	render(){
		return(
			<div>
				<div>{this.state.count}</div>
				<button onClick={this.handleClick}>Click me</button>
			</div>
			)
	}

} 


export default State2