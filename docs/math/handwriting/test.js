Function.prototype.bind2 = function(context) {

    var self = this; // this 指向调用者
    return function () { // 实现第 2点
        return self.apply(context); // 实现第 1 点
    }
}

var value = 2;
var foo = {
    value: 1
};

function bar() {
	return this.value;
}

var bindFoo = bar.bind2(foo);

bindFoo(); // 1


let add = a => b => c => d => {
    return a + b + c + d
}

console.log(add(1)(2)(3)(4))

let r = [1,[2,[3,[4,[5]]]]]

Array.prototype.myFlat = function(n=1){
    if(n === 0) return this
    return this.reduce((a, b)=>{

        // 第一次 a为一个空元素
        if(Array.isArray(b)){
            return a.concat(b.myFlat(--n))
        }else{
            return [a, ...b]
        }
    }, [])   
}

r.myFlat(Infinity)