import React from 'react'

class State1 extends React.Component{
	constructor(){
		super()
		this.state={
			hasBeenClicked:false,
			color:"red",
			addressInfo:{
				street:"awas vikas",
				city:"kanpur",
				country:"india"
			}
		}
	}

	handleClick=()=>{
		this.setState({hasBeenClicked:true,
			color:"green",addressInfo:{
				...this.state.addressInfo,city:'prayagraj'} })
	}

	render(){
		const styles={color:this.state.color};
		const {street,city,country}=this.state.addressInfo;
		return(
			<div>
				<p style={styles}>I have {this.state.hasBeenClicked?null:' not '}been clcked</p>
				<p> { `street: ${street}  city:${city} country:${country}`} </p>
				<button onClick={this.handleClick}>click me!</button>
			</div>

			)
	}

}



export default State1

