const { validateObject } = require('./validateObj')

const obj1 = { topic: 'A', name: 'a', description: 'a description' };
const obj2 = { topic: 'A', name: 'b', description: 'a description' };
const obj3 = { topic: 'A', name: 'a' };
const obj4 = { topic: 'A', name: 'a', notdescription: 'not a description' };
const obj5 = { topic: 'A', name: 'a', description: 'too short' };
const obj6 = { topic: 'A', name: 'a', description: 'too long '.repeat(20) };
const obj7 = { topic: 'B', name: 'x', description: 'short description' };
const obj8 = { topic: 'B', name: 'y', description: 'too long '.repeat(10) };
const obj9 = { topic: 'C', name: 'a', description: 'some description' };

describe('validator tests - edge cases', () => {
    it(null + ' should return false', () => {
        expect(validateObject(null)).toStrictEqual(false);
    })
    it(undefined + ' should return false', () => {
        expect(validateObject(undefined)).toStrictEqual(false);
    })
    it('{} should return false', () => {
        expect(validateObject({})).toStrictEqual(false);
    })
    it(JSON.stringify(obj3) + ' should return false', () => {
        expect(validateObject(obj3)).toStrictEqual(false);
    })
    it(JSON.stringify(obj4) + ' should return false', () => {
        expect(validateObject(obj4)).toStrictEqual(false);
    })
    it('[] should return false', () => {
        expect(validateObject([])).toStrictEqual(false);
    })
    it('someString should return false', () => {
        expect(validateObject('someString')).toStrictEqual(false);
    })
    it(5 + ' should return false', () => {
        expect(validateObject(5)).toStrictEqual(false);
    })
});

describe('validator tests - generic rules', () => {
    it(JSON.stringify(obj1) + ' should return true', () => {
        expect(validateObject(obj1)).toStrictEqual(true);
    })
    it(JSON.stringify(obj2) + ' should return false', () => {
        expect(validateObject(obj2)).toStrictEqual(false);
    })
    it(JSON.stringify(obj5) + ' should return false', () => {
        expect(validateObject(obj5)).toStrictEqual(false);
    })
    it(JSON.stringify(obj6) + ' should return false', () => {
        expect(validateObject(obj6)).toStrictEqual(false);
    })
    it(JSON.stringify(obj7) + ' should return true', () => {
        expect(validateObject(obj7)).toStrictEqual(true);
    })
    it(JSON.stringify(obj8) + ' should return false', () => {
        expect(validateObject(obj8)).toStrictEqual(false);
    })
    it(JSON.stringify(obj9) + ' should return false', () => {
        expect(validateObject(obj9)).toStrictEqual(false);
    })
});