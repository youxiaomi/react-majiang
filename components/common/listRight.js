import React,{Component,PropTypes} from 'react'

class ListRight extends Component {


	render(){
		const {styles,win}=this.props
		return(
		<div style={styles} >{win}</div>	
		)
	}
	



}
export default ListRight