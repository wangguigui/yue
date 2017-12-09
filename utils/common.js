function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}
function valipt(e,o){
  if(e.detail.value.length>0){
    o.setData({
      disable: false
    })
  }else{
    o.setData({
      disable: true
    })
  }
  o.setData({
    name: e.detail.value
  })
  console.log(e.detail.value);
}


module.exports = {
  sayHello:sayHello,
  sayGoodbye : sayGoodbye,
  valipt : valipt
}
