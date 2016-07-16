var foo;

try {
    foo.length;
}
catch (err) {
    //err is block scoped.
    console.log(err); //TypeError
}

console.log(err); // ReferenceError

/*
Execution result: 
4.blockscope.js:11
console.log(err); // ReferenceError
            ^
ReferenceError: err is not defined
*/