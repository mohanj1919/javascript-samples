/*
Hoisting: placing all the variable declarations to top of the block.
*/

a;
b;
a = b;
b = 2;
b;
a;

/*

compiler produces following code:

var a;//hoisted at top
var b;//hoisted at top
a;
b;
a = b;
b = 2;
b;
a;
*/