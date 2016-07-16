//Function declarations, Function Expressions and Block scope.

/*
Function declarations: If function keyword is first thing in the statement, then it is funciton definition.
Function Expressions: assignment of function declaration to a variable.

Named function are most useful than anonymous.
Cons of an anonymous function expressions:
1. No way to reference the function within the function. 
    In case of recusive function call it is not possible in anonymous func expressions case.
2. Difficult to debug.
3. Named functions provide self documentation of the code(If function name illustrates the requirement.)
*/

var foo = function bar() { // this is a function expression.
    var foo = "baz";
    //console.log(test);
    function baz(foo) {
        foo = bar;
        foo;
    }
    baz();
};

foo();
bar(); //Error!! because the bar is not present in the global scope. 
//As it is function expression, bar's scope is maintained till it get assigned to foo variable.

/*
Execution results:

Following is the error, If no name is given to the function before assigning it to variable "foo":
4.functionscope.js:17
console.log(test);
            ^
ReferenceError: test is not defined
    at foo (4.functionscope.js:17:17)

Following is the error, If a name is given to the function before assigning it to variable "foo":
4.functionscope.js:17
    console.log(test);
                ^
ReferenceError: test is not defined
    at bar (4.functionscope.js:17:17)
*/