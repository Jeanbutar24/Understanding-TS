function add(n1, n2, showresult) {
    if (showresult) {
        return n1 + n2;
    }
}
var number1 = 12.8;
var number2 = 8;
// const printResult: boolean = true;
// const result = add(number1, number2, printResult);
// console.log(result);
var admin = 'admin';
var Read_only = true;
var Author = 'jean';
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["Read_only"] = 1] = "Read_only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
var person = {
    admin: Role.admin
};
// define our Tuples
var ourTuples;
// initialize correctly
ourTuples = [2, false, 'jean'];
// object types
var car = {
    type: 'toyota',
    model: 'avanza 2g',
    year: 4000
};
car.type = 'mitshubishi';
// object with optional
var car2 = {
    type: 'Toyota'
};
car2.mileage = 2000;
var obj = {
    funtion: function (params) {
        return 'Jean ' + params;
    }
};
var carobj = {
    car: 'Toyota',
    year: 2034,
    model: 'jean'
};
var carInterface = {
    height: 0,
    width: 0,
    color: 'red'
};
// TypeScript Union Types
function unionParams(code) {
    return code;
}
console.log(unionParams('jean'));
