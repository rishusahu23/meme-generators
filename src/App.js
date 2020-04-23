import React from 'react' 
// import Navbar from './Navbar'
// import MyInfo from './MyInfo'
import List from './TodoList/List'

import State3 from './StatePractice/State3'



class App extends React.Component
{
	
	render(){
		return(
			<div> 
				<List />
			</div>
			)
	}		


}
export default App;


/*

 getDate=()=>(new Date().toString());
			
				
				
		

	render(){
			
		 const date=this.getDate();
		return (
		    <div>
		    	<p> {`current date was${date}`} </p>
		    </div>
    )
	}
	*/


