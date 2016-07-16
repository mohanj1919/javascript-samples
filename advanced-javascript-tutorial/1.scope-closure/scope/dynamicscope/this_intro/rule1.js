function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo(); //prints undefined  undefined
console.log(baz.baz);
/*
rule 1 - new

###as javascript does not have classes, new keyword does not instantiate a class in javascript.

new infront of any function call makes it a constructor call.
new infront of any function call does 4 things:
    1. brand new empty object created.
    2. object gets linked somewhere ().
    3. new obejct bounds to this keyword.
    4. if function does not have a return statement,
        engine implictly returns this keyword. (inserts "return this;" code blcok at end of the function) 
*/
