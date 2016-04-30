import React,{Component} from 'react';

class ComponentSet extends Component{
	save(event){
		var name=event.target.parentNode.firstChild.textContent
		this.props.actions.setPrice(name,event.target.value)
	}
	render(){
		const {user,actions}=this.props
		if(user.preset.setShow){
			// onblur解决ios上uc浏览器失去焦点过后的界面显示问题
			var set=<div className='subSet' ref='set' id='subSet' onBlur={()=>screen()}>
					 <div>
					<label for="da" >大队</label>
						 <input type="number" id="da"  onChange={(event)=>this.save(event)} value={user.price.大队}/>
						<span>番</span>
					</div>
					  <div>
						<label for="qing">清一色</label>
						 <input type="number" id="qing"  onChange={(event)=>this.save(event)} value={user.price.清一色}/>
					<span>番</span>
					</div>
					 <div>
						<label for="xiao">小七对</label>
						 <input type="number" id="xiao"  onChange={(event)=>this.save(event)} value={user.price.小七对}/>
					<span>番</span>
					</div>
					<div>
						<label for="long">龙七对</label>
						 <input type="number" id="long"  onChange={(event)=>this.save(event)} value={user.price.龙七对}/>
					<span>番</span>
					</div>
					<div>
						<label for="jin">金钩吊</label>
						 <input type="number" id="jin"  onChange={(event)=>this.save(event)} value={user.price.金钩吊}/>
					<span>番</span>
					</div>
					<div>
						<label for="di">底</label>
						 <input type="number" id="di"  onChange={(event)=>this.save(event)} value={user.price.底}/>
					<span>价钱</span>
					</div>
					<div>
						<label for="zhi">直雨</label>
						 <input type="number" id="zhi" onChange={(event)=>this.save(event)} value={user.price.直雨}/>
					<span>价钱</span>
					</div>
					<div>
						<label for="wan">弯雨</label>
						 <input type="number" id="wan" onChange={(event)=>this.save(event)} value={user.price.弯雨}/>
					<span>价钱</span>
					</div>
					<div>
						<label for="jia">加底</label>
						 <input type="number" id="jia"  onChange={(event)=>this.save(event)} value={user.price.加底}/>
					<span>价钱</span>
					</div>
				<div>
					<button className='btn btn-primary' id='setClose' onClick={()=>this.props.actions.showSet(false)}>关闭</button>
				</div>

			</div>
		}
		return(
			<div className='preset' id='preset'>
					<button className='btn btn-default' onClick={()=>this.props.actions.showSet(true)}>设置</button>
					{set}
			</div>
		)
	}
}
export default ComponentSet