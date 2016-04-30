export function addTodo(text) {
  return { 'type': "add", "test":text }
}
export function deleteTodo(text) {
  return { "type": "delet", "test":text}
}
export function showCenter(name,val){
 return {'type':'showCenter','name':name,'val':val}
}
export function addFrist(id,wl){
return {'type':'addFrist','id':id,'wl':wl}
}
export function addNowData(text1,text2){
return {'type':'addNowData','text1':text1,'text2':text2}
}
export function addData(self,other){
return {'type':'addData','self':self,'other':other}
}
export function deletData(self,other){
return {'type':'deletData','self':self,'other':other}
}
export function setPrice(name,val){
return {'type':'setPrice','name':name,'val':val}
}
export function showSet(val){
return {'type':'showSet','val':val}
}