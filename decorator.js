var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器
var getPositionDecorator = function (constructor) {
    constructor.prototype.getPosition = function () {
        return [100, 200];
    };
};
var addPetrolDecorator = function (constructor) {
    constructor.prototype.addPetrol = function () {
        // do something
        console.log("".concat(constructor.name, "\u8FDB\u884C\u52A0\u6CB9"));
    };
};
var Tank = /** @class */ (function () {
    function Tank() {
    }
    Tank = __decorate([
        addPetrolDecorator,
        getPositionDecorator
    ], Tank);
    return Tank;
}());
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane = __decorate([
        addPetrolDecorator,
        getPositionDecorator
    ], Plane);
    return Plane;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal = __decorate([
        getPositionDecorator
    ], Animal);
    return Animal;
}());
var aaa = new Tank();
aaa.addPetrol();
//重载构造函数
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter = /** @class */ (function () {
    function Greeter(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeter = __decorate([
        classDecorator
    ], Greeter);
    return Greeter;
}());
var newGreeter = new Greeter('666');
console.log(888, newGreeter);
