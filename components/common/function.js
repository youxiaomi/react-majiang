export function click(a,b){
		const {user,actions}=this.props
		if(!user.center.show){
			actions.showCenter('secBtn',false)
			actions.showCenter('show',true)
				actions.addFrist(a,b)
		}
		
	}
export function	secondBtnFun(self,input){
				const {user,actions}=this.props
			var inputState=input.checked
			if(user.center.fristType=='win'){
					console.log(inputState)
					if(inputState){
						actions.addData(self,user.center.frist)
					}else{
						actions.deletData(self,user.center.frist)
					}
				}else{
					if(inputState){
						actions.addData(user.center.frist,self)
					}else{
						actions.deletData(user.center.frist,self)
					}
				}
	}
export function count(a,b,c){
	var win=sub(a,b,c)
	var lose=sub(b,a,c)
		function sub(s,o,user){
			var up=0,up1=0,dian=false
		for(var d of user[s][o]){
			
			if(d.slice(0,1)=='自'){
				dian=1
			}else if(d.slice(0,1)=='点'){
				dian=2
				}
		}		
		if(dian==1||dian==2){
			for(var d of user[s][o]){
				for(let m in user.price){
					if(d.slice(0,1)==m.slice(0,1)){
						if(d.slice(0,1)=='直'||d.slice(0,1)=='弯'){
							up=up+user.price[m]
							up1=up1+1
						}else if(d.slice(0,1)!=='自'||d.slice(0,1)!=='点'){
							up1=up1+user.price[m]
						}
						
					}
					}
				}
			if(dian=1){
				return up=up+Math.pow(2,up1)*user.price.底+user.price.加底
			}else{
				return up=up+Math.pow(2,up1)*user.price.底
				}
		}else{
			for(var d of user[s][o]){
			switch(d.slice(0,1)){
			case '直':up=up+user.price.直雨;break;
			case '弯':up=up+user.price.弯雨;break;
			}
			}
			return up
		}	
		}
	return win-lose
}