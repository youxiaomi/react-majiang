import React, { Component, PropTypes } from 'react'
import {click,secondBtnFun,count} from './common/function'		
	
class ComponentSelf extends Component{
	
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
		// 所赢三家的数据
		var winUp=[],winFace=[],winDown=[]
		const {user,actions}=this.props
			user.a.b.forEach(function(data){
				winUp.push(<div style={styleR}>{data} </div>)
		})
			user.a.c.forEach(function(data){
				winFace.push(<div style={styleC}>{data} </div>)
		})
			user.a.d.forEach(function(data){
				winDown.push(<div style={styleL}>{data} </div>)
		})
		if(user.center.secBtn&&user.center.frist!=='a'){
				var secondBtn=<input ref='role1Input' type='checkBox' onClick={()=>secondBtnFun.bind(this)('a',this.refs.role1Input) } className='second'/>
		}
		var rows=[count('a','b',user),count('a','c',user),count('a','d',user)]
		// 判断返回的数据正负
		var news=rows.map(function(a){
			if(a<0){
				return '输'
			}else{
				return '赢'
				}
		})
		return(
			<div  className='role role1'>
				// 三家的分别价格
				<div className='role1_price'>
					<div>{news[0]}上<div>{rows[0]}</div></div>
					<div>{news[1]}对<div>{rows[1]}</div></div>
					<div>{news[2]}下<div>{rows[2]}</div></div>
				</div>
				// 改变用户的被选状态
				{secondBtn}
				// 两个输赢按钮
				<botton className=' btn btn-default btn-lg ' id='role1_btn_win' onClick={()=>click.bind(this)('a','win') }>赢</botton>
				<botton className=' btn btn-default btn-lg ' id='role1_btn_lose' onClick={()=>click.bind(this)('a','lose') }>输</botton>
				// 分别三家的详细牌况
				<div className='role1_up_win'>
					{winUp}
				</div>
				<div className='role1_face_win'>
					{winFace}
				</div>
				<div className='role1_down_win'>
					{winDown}
				</div>
			</div>
			)
	
	}
}
export default ComponentSelf