console.log("Ex1");
const verificare1 = numar => {
    if (numar % 2 == 1) {
        return numar * numar;
    } else return numar - 2;
}
console.log(verificare1(10));
console.log(verificare1(9));
console.log("--------------------")


console.log("Ex2");
function isPrim(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function arrayPrim(vector) {
    const array = [];
    for (let i = 0; i < vector.length; i++) {
        if (isPrim(vector[i])) {
            array.push(vector[i]);
        }
    }
    return array;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primArr = arrayPrim(arr);
console.log(primArr);
console.log("--------------------")


console.log("Ex3");
let strOnly = [];
const str = [1, "1", "salut", 2, 6, true, "true"];
str.forEach(myFunction);

function myFunction(item) {
    if (typeof item === "string") {
        strOnly.push(item);
    }
}
console.log(strOnly);
console.log("--------------------")


console.log("Ex4");
function addDigits(str) {
    let sumOdd = 0;
    for (let index = 0; index < str.length; index++) {
        if (isNaN(str[index])) {
            continue;
        }
        sumOdd += Number(str[index]) % 2 != 0 ? Number(str[index]) : 0;
    }
    console.log(sumOdd);
}
addDigits("152Cab2cf3");
console.log("--------------------")


console.log("Ex5");
const notaExamen = 11;
switch (notaExamen) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Picat");
        break;
    case 5:
        console.log("Ati trecut, cu indulgenta..");
        break;
    case 6:
    case 7:
        console.log("Ati trecut.")
        break;
    case 8:
    case 9:
    case 10:
        console.log("Ati trecut cu brio!")
    default:
        console.log("Nota invalida!")
        break;
}
