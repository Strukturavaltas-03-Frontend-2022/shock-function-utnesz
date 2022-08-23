/**
 * ÖSSZES TESZTELÉSE:
 * npm i
 * npm run test01
 */

/**
 * A függvény részei.
 * function - kulcsszó a függvény létrehozására
 * add - a függvény neve, amivel később hivatkozunk rá
 * (num1, num2) - paraméterlista, azok a változók amelyeket átadunk a függvénynek
 * {...} - függvénytörzs, azok a műveletek, amelyeket a függvény végez
 * return - a függvény visszatérési értéke
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * Feladatok: minden függvény előtt le lesz írva, mi a pontos feladat.
 * Először csak egy-egy sort kell pótolnod, majd egyre többet kell önállóan 
 * megírnod a függvényekből.
 * Figyelj a dokumantációs kommentekre, amelyek /** jellel kezdődnek.
 */

/**
 * 1. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Visszaadja a kapott üzenetet változtatás nélkül.
 * @param {string} message - a szöveg amit vissza kell adni.
 * @returns {string} - a kapott üzenet.
 */
function logTheString(message) {
    return;
}

/**
 * 2. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Visszaadja a köszöntést, kiegészítve a kapott névvel.
 * @param {string} name A felhasználó neve.
 * @returns {string} `Hello <name>!` kifejezés, <name> = a kapott name.
 * @desc Példa a név beszúrására: `Howdy ${userName}!`
 */
function getGreeting(name) {
    return;
}

/**
 * 3. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Visszaadja a köszöntést, kiegészítve a nagy kezdőbetűs névvel.
 * @param {string} name A felhasználó neve.
 * @returns {string} `Hello <name>!` kifejezés, <name> = name nagy kezdőbetűvel.
 */
function getTitleGreeting(name) {
    const titleCaseName = name[0].toUpperCase() + name.slice(1);
    return;
}

/**
 * 4. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Visszaadja a szöveget, kiegészítve a nagy kezdőbetűs névvel.
 * @param {string} productName A termék neve.
 * @returns {string} `Product: <name>!`, <name> = productName nagy kezdőbetűvel.
 */
function getProductDetails(productName) {
    // 
}

/**
 * 5. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Függvénykifejezés, visszadja a kapott szám 1.27-szeresét.
 * @param {number} price Egy termék ára.
 * @returns {number} a price 1.27-szerese.
 */
const getBruttoPrice = function(price) {
    const bruttoPrice = price * 1.27;
    return;
}

/**
 * 6. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Függvénykifejezés, visszadja a kapott szám 1.27-szeresét, egészre 
 * kerekítve.
 * @param {number} price Egy termék ára.
 * @returns {number} a price 1.27-szerese, egészre kerekítve.
 */
const getRoundedBruttoPrice = function(price) {
    const bruttoPrice = Math.round(price * 1.27);
    return;
}

/**
 * 7. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Függvénykifejezés, visszadja a kapott szám 1.35-szörösét, egészre 
 * kerekítve.
 * @param {number} price Egy termék ára.
 * @returns {number} a price 1.35-szöröse, egészre kerekítve.
 */
const getSellPrice = function(price) {
    // 
}

/**
 * 8. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary Függvénykifejezés, visszadja a kapott szám 1.35-szörösét, 
 * majd ennek 0.9-szeresét egészre kerekítve.
 * @param {number} price Egy termék ára.
 * @returns {number} a price 1.35-szörösének a 0.9-szerese, egészre kerekítve.
 */
const getActionPrice = function(price) {
    // 
}

/**
 * 9. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszadja a termék összefoglalóját.
 * @param {Object} product Egy termék, például: {name: '', price: 0, stock: 0}
 * @returns {string} `<name>, $<price>, in stock: <stock>`, 
 * <name> = a product.name nagy kezdőbetűvel
 * <price> = a product.price 1.35-szöröse kerekítve
 * <stock> = a product.stock
 */
const getProductDescrition = product => {
    // 
}

/**
 * 10. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, neve: getBio  
 * visszadja a tag adatait egy mondatban.
 * @param {Object} member Egy ember, például: {name: '', age: 0, city: ''}
 * @returns {string} `<name>, <age> years old, live in: <city>.`, 
 * <name> = member neve nagy kezdőbetűvel
 * <age> = member kora
 * <city> = member városa
 * @desc EXPORTÁLNI KELL A FÜGGVÉNYT!
 */



/**
 * 11. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszadja a tag adatait egy mondatban.
 * @param {Object} member [member={name: 'jimmy', birthYear: 2000, city: 'SF'}] 
 * Egy embert reprezentáló objektum az alapértelmezett érték szerint.
 * Ha nem kap a függvény member objektumot, akkor a default értékkel dolgozik.
 * @returns {string} `<name>, <age> years old, live in: <city>.`, 
 * <name> = member neve nagy kezdőbetűvel
 * <age> = member kora, a birthYear alapján kiszámítva
 * <city> = member városa
 */
const getMemberDesc = (member = {name: 'jimmy', birthYear: 2000, city: 'SF'}) => {
    const age = new Date().getFullYear() - member.birthYear;
}

/**
 * 12. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, neve: getCarDetails  
 * visszadja az autó leírását.
 * @param {Object} car [car={manufacturer: 'ford', year: 2010, type: 'fiesta'}] 
 * Egy autót reprezentáló objektum az alapértelmezett érték szerint.
 * Ha nem kap a függvény car objektumot, akkor a default értékkel dolgozik.
 * @returns {string} `<man>, <age> years old, type: <type>.`, 
 * <man> = a gyártó neve nagy kezdőbetűvel
 * <age> = az autó kora, a year alapján kiszámítva
 * <type> = az autó típusa nagy kezdőbetűvel
 * @desc EXPORTÁLNI KELL A FÜGGVÉNYT!
 */


export {
    logTheString,
    getGreeting,
    getTitleGreeting,
    getProductDetails,
    getBruttoPrice,
    getRoundedBruttoPrice,
    getSellPrice,
    getActionPrice,
    getProductDescrition,

    getMemberDesc,
    
}
