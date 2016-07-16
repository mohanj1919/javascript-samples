
var a = b();
var c = d();
a;
c;

function b() {
    return c;
}

var d = function () {
    return b();
};


/*
compiler turn above code into following.
(compiler moves the function declaration and variables to top of the code block.
**functions are hoisted before variables**
**function expressions are left as is**)

we can't call a function expression before it has occurred in code.

function b() {
    return c;
}

var a;
var c;
var d;
a = b();
c = d();
a;
c;
d = function () {
    return b();
}

compiler output:

hoisting_II.js:3
var c = d();
        ^

TypeError: d is not a function

Error!!!, because function expression is being called before it
appeared in code. 

*/
