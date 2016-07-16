function foo(bar) {
    if (bar) {
        console.log(baz);
        let baz = bar;
    }
}

/*
reference error on line 3.
because let variables does not hoist.
*/