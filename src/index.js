const { validateObject } = require("./validator/validateObj")


const obj1 = {
    topic: 'A',
    name: 'a',
    description: 'something something'
};

const obj2 = {
    topic: 'B',
    name: 'x',
    description: 'something'
};

const obj3 = {
    topic: 'A',
    name: 'a',
    description: 'something something'.repeat(20)
};

console.log(validateObject(obj1));
console.log(validateObject(obj2));
console.log(validateObject(obj3));