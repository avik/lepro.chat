var obj = {
    name : 'Dima',
    age  : 30,
    p    : { field_1 : 42 },
    sayHello : function() {
        console.log('Hello, my name is ' + this.name);
    },
    incAge : function(inc) {
        this.age = this.age + inc;
    },
    log : console.log
};

obj.color = 'red';
console.log(obj.color);

obj.sayHello();

console.log(42);
obj.log(15);

obj.sayHello.apply({ name : 'Vasya' }, []);