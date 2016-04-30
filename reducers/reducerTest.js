var initState={
"a":{
    'b':[],
    'c':[], 
    'd':[]
},
'b':{
    'c':[],
    'd':[],
	'a':[]
},
'c':{
    'd':[],
    'a':[],
    'b':[]
},
'd':{
    'a':[],
    'b':[],
    'c':[]
},
'center':{
		'show':false,
		'subCenter':false,
		'secBtn':false,
		},
'price':{
//		a 一番 b两，c三 ，n没有翻,直雨和弯雨都是一番
		'底':5,
		'大队':1,
		'直雨':10,
		'弯雨':5,
		'加底':0,
		'小七对':2,
		'龙七对':2,
		'金钩吊':1,
		'清一色':2
		},
'preset':{
		'setShow':false,
		},
		
}

var reducer=function counter(state = initState, action) {
  switch (action.type) {
	case 'showCenter': 
		state.center[action.name]=action.val
        return Object.assign({},state)
 
	case 'addData':
		state[action.other][action.self].push(state.center.nowdata)
		return state=Object.assign({},state,{})
	case 'deletData':
		state[action.other][action.self].pop(state.center.nowdata)
		return state=Object.assign({},state,{})
	case 'addFrist':
		 state.center.frist=action.id
			state.center.fristType=action.wl
		return state
	case 'addNowData':
		if(action.text1){
					state.center.nowdata=action.text1
		}
		if(action.text2){
					state.center.nowdata=state.center.nowdata+action.text2
					}
		return state=Object.assign({},state)
	case 'setPrice':
		state.price[action.name]=parseFloat(action.val)
			console.log(state)
		return state=Object.assign({},state)
	case 'showSet':
		state.preset.setShow=action.val
		return state=Object.assign({},state)
  default:
    return state;
  }
}
export default reducer
		 