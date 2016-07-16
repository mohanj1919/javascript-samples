function foo(){
    console.log(this.bar);
}

var bar = "bar1";
var obj = {bar: "bar2"};

foo(); // "bar1"
foo.call(obj); // "bar2"

/*
rule 2 - Explicit binding 

If we use call/apply at call site, the parameter mentioned in the call/apply methods becomes "this"
explicitly mentioning the object reference.
(call and apply are two different functions, but this keyword binding is same in both)
foo.call(obj);
here, obj becomes this.
*/
