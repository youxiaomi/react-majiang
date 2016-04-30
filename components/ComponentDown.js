import React, { Component, PropTypes } from 'react'
import {click,secondBtnFun,count} from './common/function'

class ComponentDown extends Component{
	
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
			user.d.a.forEach(function(data){
				winUp.push(<div style={styleL}>{data} </div>)
		})
			user.d.b.forEach(function(data){
				winFace.push(<div style={styleL}>{data} </div>)
		})
			user.d.c.forEach(function(data){
				winDown.push(<div style={styleL}>{data} </div>)
		})
		if(user.center.secBtn&&user.center.frist!=='d'){
				var secondBtn=<input ref='role4Input' type='checkBox' onClick={()=>secondBtnFun.bind(this)('d',this.refs.role4Input) } className='second'/>
		}
		var rows=[count('d','a',user),count('d','b',user),count('d','c',user)]
		var news=rows.map(function(a){
			if(a<0){
				return '输'
			}else{
				return '赢'
				}
		})
		return(
			<div className='role role4'>
				<div className='role4_price'>
					<div>{news[2]}下<div>{rows[2]}</div></div>
					<div>{news[1]}对<div>{rows[1]}</div></div>
					<div>{news[0]}上<div>{rows[0]}</div></div>
				</div>
				<botton className=' btn btn-default btn-lg ' id='role4_btn_win' onClick={()=>click.bind(this)('d','win') }>赢</botton>
				<botton className=' btn btn-default btn-lg ' id='role4_btn_lose' onClick={()=>click.bind(this)('d','lose') }>输</botton>
				{secondBtn}
				<div className='role4_up_win'>
								{winUp}
				</div>
				<div className='role4_face_win' >
					{winFace}
				</div>
				<div className='role4_down_win'>
					{winDown}
				</div>
			</div>
			)
	
	}
}


export default ComponentDown
