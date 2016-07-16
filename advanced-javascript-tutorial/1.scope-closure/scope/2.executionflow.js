var foo = "bar";

function bar() {
    console.log("bar function called.");
    var foo = "baz";

    function baz(foo) {
        console.log("baz function called.");
        foo = "bam";
        bam = "yay"; //engine creates bam for us, because bam is LHS reference.
    }
    baz();
}

bar(); //executes bar() funciton of global scope.
foo;
bam;
baz(); // searaches for baz reference in global scope. 
//Here engine does not create baz for us, because baz() is RHS reference, thows reference error.