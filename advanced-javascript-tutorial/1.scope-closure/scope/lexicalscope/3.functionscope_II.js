
//type 1
console.log("IIFE type 1");
var foo = "foo";

(function () {
    var foo = "foo2";
    console.log("In function scope, foo = " + foo);
}
)/*function enclosed*/();/*enclosed function invoked*/

console.log("In global scope, foo = " + foo);

//type 2
console.log("IIFE type 2");
var foo = "foo";

(function (bar) {
    var foo = bar;
    console.log("In function scope, foo = " + foo);
}
)/*function enclosed*/(foo);/*enclosed function invoked*/

console.log("In global scope, foo = " + foo);

//type 3
console.log("IIFE type 3");
var foo = "foo";

(function (bar) {
    var foo = bar;
    console.log("In function scope, foo = " + foo);
} (foo)/*enclosed function invoked*/
)/*function enclosed*/;

console.log("In global scope, foo = " + foo);

/*

line 4-8 this piece of code is hidden from exposing publicly 
    as it is enclosed in parentheses.
If you wish to hide the functionality, write code in a function and put that code in parentheses.
If you wish to execute it immediately, put (); 
    to invoke the code inside the parentheses.
This pattern of writing function is called, Immediately-Invoked Function Expression (IIFE).
ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/


Execution result:
node 3.functionscope_II.js
In function scope, foo = foo2
In global scope, foo = foo

*/