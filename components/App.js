
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import ComponentSet from './ComponentSet.js'
import ComponentSelf from './ComponentSelf.js'
import ComponentUp from './ComponentUp'
import ComponentFace from './ComponentFace'
import ComponentDown from './ComponentDown'
import ComponentCenter from './ComponentCenter'

import * as addTodo from '../action/action.js'
var style={

		backgroundImage:"url('../static/img/background.jpg')",
		backgroundSize:"100%",
		width:'100%',
		height:'100%',
		position:'relative',
			}
class App extends Component {
	render(){
		// 分别四个角色组件，一个设置组件，和中心显示组件
		const {user,actions}=this.props
	return(
			<div style={style}>
				<ComponentSelf actions={actions} user={user}/>
				<ComponentUp actions={actions} user={user}/>
				<ComponentFace actions={actions} user={user}/>
				<ComponentDown actions={actions} user={user}/>
				<ComponentCenter center={user.center} actions={actions}/>
				<ComponentSet actions={actions} user={user}/>
			</div>	
		)
	}
}


function mapStateToProps(state){
	console.log(state)
	return{
		user:state
	}
}
function mapDispatchToProps(dispatch){
	console.log(bindActionCreators(addTodo, dispatch))
	return{
		    actions: bindActionCreators(addTodo, dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App)


