var obj = {
    a: 2,
    b: 3,
    c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
    a = b + c;
    d = b - 1;
    d = 3; //compiler ask scope manager about the scope of LHS reference for d.
    //there is no LHS reference for "d" variable.
}

obj.d; //undefined
d; //3


/*
with keyword allows access obj properties directly. short hand reference.
with statement creates new scope for the variables.
*/