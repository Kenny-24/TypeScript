// 装饰器
// 类装饰器
const getPositionDecorator: ClassDecorator = (constructor: Function) => {
    constructor.prototype.getPosition = () => {
        return [100, 200]
    }
}

const addPetrolDecorator: ClassDecorator = (constructor: Function) => {
    constructor.prototype.addPetrol = () => {
        // do something
        console.log(`${constructor.name}进行加油`);
    }
}

@addPetrolDecorator
@getPositionDecorator
class Tank {
    [x: string]: any
}
@addPetrolDecorator
@getPositionDecorator
class Plane {}

@getPositionDecorator
class Animal {}
let aaa = new Tank()
aaa.addPetrol()

//重载构造函数
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}
let newGreeter = new Greeter('666')
console.log(888,newGreeter)
