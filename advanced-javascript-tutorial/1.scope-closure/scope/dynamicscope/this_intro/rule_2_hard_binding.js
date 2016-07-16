function foo() {
    console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

var orig = foo;
foo = function () { orig.call(obj); };

foo(); //"bar"
foo.call(obj2); //??? "bar"

/*

rule 2 - hard binding.

Q) this binding is lost!!!

this keyword binding does not work in ajax calls, event binding, etc.
hard bind the this keyword to another.

on line 9: obj is the hard binding.
*/

//utility function for hard binding.

function bind(func, obj) {
    return function () {
        func.call(obj);
    }
}
function foo() {
    console.log(this.bar);
}
var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

foo = bind(foo, obj);

foo(); //"bar"
foo.call(obj2); //??? "bar"

//further improving above code with prototypes.

if (!Function.prototype.bind2) { //if bind2 is not already created.
    Function.prototype.bind2 = function (o) {
        var fn = this; // this refers to the function which calls bind2 function.
        return function () {
            return fn.apply(o, arguments);
        };
    };
}

function foo(baz) {
    console.log(this.bar + "" + baz);
}

var obj = { bar: "bar" };
foo = foo.bind2(obj); // calls prototype method.

foo("baz");

/* */