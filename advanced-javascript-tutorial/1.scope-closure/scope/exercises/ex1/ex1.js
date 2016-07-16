A();

function C() {
    console.log("OOPS!");
}

function E(f) {
    console.log("E");
    f();
    var f = F;
}

var A = function () {
    console.log("A");
    B();
};