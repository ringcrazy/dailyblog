let name = 'zfpx'
let age = 9
let address = 'china'

// 第一个参数是字符串数组， 第二个参数是第一个变量
function jw(){
  let strings = arguments[0]

  // Array.prototype.slice.call
  let values = [].slice.call(arguments, 1)
  console.log(strings, values)
  let str = ''
  for(let i = 0; i < values.length; i++){
    str += `${strings[i]}*${values[i]}*`
  }
  str += strings[strings.length -1]
  return str
}

let str = jw`hello~${name}今年${age}岁了,我住在${address}`
console.log(str)

let obj = {
  b: 1,
  a: ()=>{
    setTimeout(()=>{
      console.log(this)
    })
  }
}
obj.a()


let result = [1,2,3,4,5].reduce((prev, next, currIndex, arr)=>{
  // 求平均数
  if(currIndex === arr.length -1){
    return (prev+next)/ arr.length
  }
  console.log(prev, next, currIndex, arr)
  return prev + next
})


Array.prototype.myReduce = function(fn, prev){
  for(let i=0; i< this.length; i++){
    if(typeof prev === 'undefined'){
      prev = fn(this[i], this[i+1], i+1, this)
      i++
    }else{
      prev = fn(prev, this[i], i, this)
    }
  }
  return prev
}

[1,2,3,4,5].myReduce((prev, next, currIndex, arr)=>{
  // 求平均数
  if(currIndex === arr.length -1){
    return (prev+next)/ arr.length
  }
  console.log(prev, next, currIndex, arr)
  return prev + next
})
