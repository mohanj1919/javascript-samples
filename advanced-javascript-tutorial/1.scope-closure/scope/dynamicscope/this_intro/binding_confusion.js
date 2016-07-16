function foo(){
    var bar = "bar1";
    baz();
}
function baz(){
    console.log(this.bar);
}

var bar = "bar2";
foo(); // this keyword is binded with default binding (i.e. global object).

/*
if baz is third party func and used this keyword. this keyword references to their local variable.

cross-over between local lexical binding to this keyword binding is not possible. 

//ans for the above scenario found in stack overflow is as follows:
*/

function foo(){
    var bar = "bar1";
    this.baz = baz; 
    /* misconspetion here is: making baz function local to the current executing funciton.
    by assigning baz function to the this keyword in foo function.
    as this keyword is set by call site, this does'nt work.
    as this keyword is binded with global object. baz function of global object gets executed.
    */
    this.baz();
}
function baz(){
    console.log(this.bar);
}

var bar = "bar2";
foo(); //???

