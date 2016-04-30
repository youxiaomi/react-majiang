import React, { Component, PropTypes } from 'react'

class ComponentCenter extends Component{
	click(e){
			e.stopPropagation()
			var obj =  event.target; 
			var noData=['清一色','大队','小七对','龙七对']

			if(obj.textContent=='关闭'){
			 this.props.actions.showCenter('show',false)
				 return
			}
//			判断需不需要弹详细牌列表
			var noState=noData.some(function(data){
				if(data==obj.textContent){
					return true
				}
			})
			if(noState){
				this.props.actions.addNowData(obj.textContent)
				this.props.actions.showCenter('show',false)
				this.props.actions.showCenter('secBtn',true)
			}else{
			this.props.actions.showCenter('subCenter',true)
			this.props.actions.addNowData(obj.textContent)
			}

	}
	subBtn(event){
			event.stopPropagation()
		var obj = event.target; 
			if(obj.textContent=='关闭'){
			this.props.actions.showCenter('subCenter',false)
							return
			}
		this.props.actions.addNowData(null,obj.textContent)
		this.props.actions.showCenter('subCenter',false)
		this.props.actions.showCenter('show',false)
		this.props.actions.showCenter('secBtn',true)
		
	}
	componentDidUpdate(a,b){
//		渲染完过后添加事件（事件委托）
		if(this.props.center.subCenter){		
					this.refs.secBtn.onclick=function(event){
						this.subBtn(event)
					}.bind(this)
		}
		this.refs.center.onclick=function(event){
			var e=event
		this.click(e)
		}.bind(this)
	}
	render(){
		const {center}=this.props
		var styleShow={
		display:'block'
		}
		var styleNone={
		display:'none'
		}
		var style=center.show?styleShow:styleNone
		if(center.subCenter){
			var subCenter=<div ref='secBtn' className='secBtn' id='secBtn'>
				<button type='button' className='selClose btn btn-primary btn-xs'>关闭</button>
				<div>
				<button type="button" className="btn btn-default btn-xs">一万</button>
				<button type="button" className="btn btn-default btn-xs">二万</button>
				<button type="button" className="btn btn-default btn-xs">三万</button>
				<button type="button" className="btn btn-default btn-xs">四万</button>
				<button type="button" className="btn btn-default btn-xs">五万</button>
				<button type="button" className="btn btn-default btn-xs">六万</button>
				<button type="button" className="btn btn-default btn-xs">七万</button>
				<button type="button" className="btn btn-default btn-xs">八万</button>
				<button type="button" className="btn btn-default btn-xs">九万</button>
				</div>
				<div>
				<button type="button" className="btn btn-primary btn-xs">一条</button>
				<button type="button" className="btn btn-primary btn-xs">二条</button>
				<button type="button" className="btn btn-primary btn-xs">三条</button>
				<button type="button" className="btn btn-primary btn-xs">四条</button>
				<button type="button" className="btn btn-primary btn-xs">五条</button>
				<button type="button" className="btn btn-primary btn-xs">六条</button>
				<button type="button" className="btn btn-primary btn-xs">七条</button>
				<button type="button" className="btn btn-primary btn-xs">八条</button>
				<button type="button" className="btn btn-primary btn-xs">九条</button>
				</div>
				<div>
				<button type="button" className="btn btn-default btn-xs">一筒</button>
				<button type="button" className="btn btn-default btn-xs">二筒</button>
				<button type="button" className="btn btn-default btn-xs">三筒</button>
				<button type="button" className="btn btn-default btn-xs">四筒</button>
				<button type="button" className="btn btn-default btn-xs">五筒</button>
				<button type="button" className="btn btn-default btn-xs">六筒</button>
				<button type="button" className="btn btn-default btn-xs">七筒</button>
				<button type="button" className="btn btn-default btn-xs">八筒</button>
				<button type="button" className="btn btn-default btn-xs">九筒</button>
				</div>
				</div>
		}
		return(
			<div className='center' style={style}>
				<div ref='center'>
					<button type="button" className="btn btn-primary ">弯雨</button>
					<button type="button" className="btn btn-primary ">直雨</button>
			        <button type="button" className="btn btn-primary ">金钩</button>
					<button type="button" className="btn btn-primary ">大队</button>
					<button type="button" className="btn btn-primary ">自扣</button>
					<button type="button" className="btn btn-primary ">点炮</button>
					<button type="button" className="btn btn-primary ">小七对</button>
					<button type="button" className="btn btn-primary ">龙七对</button>
					<button type="button" className="btn btn-primary ">清一色</button>
					<button type="button" className="btn btn-default ">关闭</button>
				</div>
				{subCenter }
			</div>
			)
	
	}
}


export default ComponentCenter
