function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) {
        console.log(i); // ReferenceError
    }
}

/*
let restricts variable to be used in the block of scope where it is declared.
*/

//problems with let keyword.

function foo(bar) {
    if (bar) {
        let baz = bar;
        if (baz) {
            let bam = baz;
        }
        console.log(bam);
    }
    console.log(baz);
}

foo("bar");

/*
problems with let keyword.
1. let keyword does not hoist.
2. extra analysis required when dealing with block scoping.
3. let is implicit block scope. implicit block scopes are tough to handle than explicit.
*/

// let block- block scope with let keyword. -- available from ES6+ version.
function foo(bar) {
    let(baz = bar) {
        console.log(baz);
    }; // let block
    console.log(baz);
}

foo("bar");


function foo(bar) {
    {
        let baz = bar
        console.log(baz);
    } // let block 
    console.log(baz);
}

foo("bar");