/*
dynamic scope reads code based on the call stack.
lexical scope reads code in top-to-bottom fashion.
*/

function foo() {
    console.log(bar);
}

function baz() {
    var bar = "drink";
    foo();
}

baz();

/*
Dynamic scope notes:
when compiler reads js code at line 7, it looks back in call stack.
baz() called foo() function, hence compiler searches for bar bariable in
baz's scope.

main difference between lexical and dynamic is scoping decision.
in case of lexical it is compile time
in case of dynamic it is run time.

*/