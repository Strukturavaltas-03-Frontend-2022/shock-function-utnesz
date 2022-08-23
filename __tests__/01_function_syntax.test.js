import { checkMember } from './utils';

const taskDir = '../tasks/01_function_syntax';

describe('Function syntax', () => {
    test('1. feladat', async () => {
        const logTheString = await checkMember(taskDir, 'logTheString');
        expect(logTheString).not.toEqual(null);
        expect(logTheString('some message')).toEqual('some message');
    });
    
    test('2. feladat', async () => {
        const getGreeting = await checkMember(taskDir, 'getGreeting');
        expect(getGreeting).not.toEqual(null);
        expect(getGreeting('Samuel Jackson')).toEqual('Hello Samuel Jackson!');
    });
    
    test('3. feladat', async () => {
        const getTitleGreeting = await checkMember(taskDir, 'getTitleGreeting');
        expect(getTitleGreeting).not.toEqual(null);
        expect(getTitleGreeting('jackson')).toEqual('Hello Jackson!');
    });
    
    test('4. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getProductDetails');
        expect(testFn).not.toEqual(null);
        expect(testFn('iron')).toEqual('Product: Iron!');
    });
    
    test('5. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getBruttoPrice');
        expect(testFn).not.toEqual(null);
        expect(testFn(200)).toEqual(254);
    });
    
    test('6. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getRoundedBruttoPrice');
        expect(testFn).not.toEqual(null);
        expect(testFn(156)).toEqual(198);
    });
    
    test('7. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getSellPrice');
        expect(testFn).not.toEqual(null);
        expect(testFn(1255)).toEqual(1694);
    });
    
    test('8. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getActionPrice');
        expect(testFn).not.toEqual(null);
        expect(testFn(8500)).toEqual(10328);
    });
    
    test('9. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getProductDescrition');
        expect(testFn).not.toEqual(null);

        const product = {name: 'dishwasher', price: 89000, stock: 2};
        expect(testFn(product)).toEqual('Dishwasher, $120150, in stock: 2');
    });
    
    test('10. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getBio');
        expect(testFn).not.toEqual(null);

        const member = {name: 'jimmy', age: 24, city: 'LA'};
        expect(testFn(member)).toEqual('Jimmy, 24 years old, live in: LA.');
    });
    
    test('11. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getMemberDesc');
        expect(testFn).not.toEqual(null);

        const member = {name: 'jack', birthYear: 1985, city: 'LA'};

        expect(testFn()).toEqual('Jimmy, 22 years old, live in: SF.');
        expect(testFn(member)).toEqual('Jack, 37 years old, live in: LA.');
    });
    
    test('12. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getCarDetails');
        expect(testFn).not.toEqual(null);

        // {manufacturer: 'ford', year: 2010, type: 'fiesta'}
        const car = {manufacturer: 'toyota', year: 2002, type: 'corolla'};

        expect(testFn()).toEqual('Ford, 12 years old, type: Fiesta.');
        expect(testFn(car)).toEqual('Toyota, 20 years old, type: Corolla.');
    });
    
    

});