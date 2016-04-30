import React, { Component, PropTypes } from 'react'
import {click,secondBtnFun,count} from './common/function'

class ComponentFace extends Component{
		
	render(){
		var styleR={
		width:'0.6rem',
		float:'right',
		border:'#ddd solid 1px',
		borderRadius:'7px',
		backgroundColor:'#fff'
		}
		var styleL={
		width:'0.6rem',
		float:'left',
		border:'#ddd solid 1px',
		borderRadius:'7px',
		backgroundColor:'#fff'
		}
		var styleC={
		width:'0.6rem',
		float:'left',
		border:'#ddd solid 1px',
		borderRadius:'7px',
		backgroundColor:'#fff'
		}
		var winUp=[],loseUp=[],winFace=[],loseFace=[],winDown=[],loseDown=[]
		const {user,actions}=this.props
			user.c.d.forEach(function(data){
				winUp.push(<div style={styleL}>{data} </div>)
		})
			user.c.a.forEach(function(data){
				winFace.push(<div style={styleC}>{data} </div>)
		})
			user.c.b.forEach(function(data){
				winDown.push(<div style={styleR}>{data} </div>)
		})
		if(user.center.secBtn&&user.center.frist!=='c'){
				var secondBtn=<input ref='role3Input' type='checkBox' onClick={()=>secondBtnFun.bind(this)('c',this.refs.role3Input) } className='second'/>
		}
		var rows=[count('c','d',user),count('c','a',user),count('c','b',user)]
		var news=rows.map(function(a){
			if(a<0){
				return '输';
			}else{
				return '赢';
				}
		})
		return(
			<div className='role role3'>
				<div className='role3_price'>
					<div>{news[2]}下<div>{rows[2]}</div></div>
					<div>{news[1]}对<div>{rows[1]}</div></div>
					<div>{news[0]}上<div>{rows[0]}</div></div>
				</div>
				<botton className=' btn btn-default btn-lg ' id='role3_btn_win' onClick={()=>click.bind(this)('c','win') }>赢</botton>
				<botton className=' btn btn-default btn-lg ' id='role3_btn_lose' onClick={()=>click.bind(this)('c','lose') }>输</botton>
				{secondBtn}
				<div className='role3_up_win'>
					{winUp}
				</div>
				<div className='role3_face_win' >
					{winFace}
				</div>
				<div className='role3_down_win'>
					{winDown}
				</div>
			</div>
			)
	
	}
}


export default ComponentFace
