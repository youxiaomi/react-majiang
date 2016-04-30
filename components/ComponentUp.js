import React, { Component, PropTypes } from 'react'
import {click,secondBtnFun,count} from './common/function'
class ComponentUp extends Component{
	
	render(){
		var styleR={
		width:'1.05rem',
//		float:'right',
		border:'#ddd solid 1px',
		borderRadius:'7px',
		backgroundColor:'#fff'

		}
		var styleL={
		width:'1.05rem',
//		float:'right',
		border:'#ddd solid 1px',
		borderRadius:'7px',
		backgroundColor:'#fff'
		}
		var winUp=[],winFace=[],winDown=[]
		const {user,actions}=this.props
			user.b.c.forEach(function(data){
				winUp.push(<div style={styleR}>{data} </div>)
		})
			user.b.d.forEach(function(data){
				winFace.push(<div style={styleR}>{data} </div>)
		})
			user.b.a.forEach(function(data){
				winDown.push(<div style={styleL}>{data} </div>)
		})
					console.log(user.center)
		if(user.center.secBtn&&user.center.frist!=='b'){
				var secondBtn=<input ref='role2Input' type='checkBox' onClick={()=>secondBtnFun.bind(this)('b',this.refs.role2Input) } className='second'/>
		}
		var rows=[count('b','c',user),count('b','d',user),count('b','a',user)]
		var news=rows.map(function(a){
			if(a<0){
				return '输';
			}else{
				return '赢';
				}
		})
		return(
			<div className='role role2'>
			<div className='role2_price'>
					<div>{news[0]}上<div>{rows[0]}</div></div>
					<div>{news[1]}对<div>{rows[1]}</div></div>
					<div>{news[2]}下<div>{rows[2]}</div></div>
				</div>
				{secondBtn}
				<botton className=' btn btn-default btn-lg ' id='role2_btn_win' onClick={()=>click.bind(this)('b','win') }>赢</botton>
				<botton className=' btn btn-default btn-lg ' id='role2_btn_lose' onClick={()=>click.bind(this)('b','lose') }>输</botton>
				<div className='role2_up_win'>
					{winUp}
				</div>
				<div className='role2_face_win' >
					{winFace}
				</div>
				<div className='role2_down_win'>
					{winDown}
				</div>
			</div>
			)
	
	}
}

export default ComponentUp