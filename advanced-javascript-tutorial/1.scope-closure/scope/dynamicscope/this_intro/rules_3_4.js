function foo(){
    console.log(this.bar);
}

var bar = "drink";
var s1 = {bar: "bruce", foo: foo};
var s2 = {bar: "willam", foo: foo};

foo(); // "drink"
s1.foo(); // "bruce"
s2.foo(); // "willam"

/* 
rule 4 - default binding
in strict mode - default value for this keyword is "undefined" value
in non-strict mode - default value for this keyword is global object.

rule 3 - implicit binding
this keyword binds to the context obejct at the call site.

******************************************************

in javascript everything is object references.

line 9: call site - foo();
function stands alone, just a reference to a function.
when a function is referenced like this, default binding applies.

line 10: call site - s1.foo();
this keyword points context object (s1).
*/

//another example

var o1 = {
    bar: "bar1",
    foo: function () {
        console.log(this.bar);
    }
}
var o2 = { bar: "bar2", foo: o1.foo };

var bar = "bar3";
var foog = o1.foo;

o1.foo(); // "bar1"
o2.foo(); // "bar2"
foog(); // "bar3"

/*
qus: what happens o2 does't have bar property, will it defaults to the global variable?
ans: it does not refer to the global bar property. prints undefined.
to accurately answer this we have to go through proptotype chain.
*/
