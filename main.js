var person = {
	name: "Jora",
	_age : 20,
	get age(){
		return this._age;
	},
	set age(value){
		this._age = value<0 ? 0 : value > 122 ? 122 : value;
	}
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "sex", {
	value: "male",
	writable: false,
	enumerable: false,
	configurable: false
});

var o = {};
Object.defineProperties(o, {
	x:{
		value:2,
		writable:false,
		enumerable:true,
		configurable:true
	},
	y:{
		value:4,
		writable:false
	},
	r:{
		get: function(){
			return Math.sqrt(this.x*this.x + this.y*this.y);
		}
	}
});


var obj = {};
Object.seal(obj);
console.log(Object.isSealed(obj));