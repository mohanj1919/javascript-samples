var bar = "bar";

function foo(str){
    console.log("Befor eval, bar : " + bar);
    eval(str); //evaluates the value present in str variable.
    console.log("After eval, bar : " + bar);
}

foo("var bar = 19;");

/*
code runs slower if eval is used.
js engine should evaluate the expression when it encounters eval statement. 
js engine modifies existing scope when it sees eval statement.
which costs in performace.

avoid using setTimeout function with string values. If we use string in setTimeout statement,
string values are evaluated.

Execution result:
node 5.eval_cheating_scope.js
Befor eval, bar : bar
After eval, bar : 19

*/