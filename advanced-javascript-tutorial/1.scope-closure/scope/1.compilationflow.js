//compilation process: 
var foo = "bar"; //variable decoration.
//var foo is variable decoration part.
//foo = "bar"; is variable initialization.
function bar(){ //Add add bar to decoration list in global scope

var foo = "baz"; // var foo is a variable for "bar" scope.
}
function baz(foo){ //Add add baz to decoration list in global scope
foo = "bam"; // named parameter foo is registered in baz scope.
bam = "yay";
}
/*In execution phase, var are not considered. Execution phase performs initialization.
scope manager gives the scope of the variables/function registered in the compilation phase.
Execution engine always asks for local scope first, global scope next.
*/
function baz(foo){
foo = "bam";
bam = "yay"; // when engine executes this line, bam reference is not present in baz's scope (local scope). Engine goes one level up (global scope for the current block) and asks for the bam reference. If strict mode is not used, then "bam" reference is created in global scope. In strict mode, error occurred here.
/*Undeclared means, there is no LHS reference for the decorator in any of the scopes engine has access to.
Undefined means un-initialized.*/
}
