foo();

var foo = 2;

function foo(){
    console.log("bar");
}

function foo(){
    console.log("foo");
}

/*

why hoisting in JS compiler?

whithout hoisting, mutual-recusion is not possible.

mutual-recursion?
two or more funcs calling each other recursively.

*/

/*
following is the example of mutual recusion.
*/

a(1);

function a(foo){
    if(foo > 10) return foo;
    return b(foo+2);
}

function b(foo){
    return c(foo) + 1;
}

function c(foo){
    return a(foo*2);
}

/*
If hoisting is not present in compiler, then above code never compiles.

Ans: 18
*/