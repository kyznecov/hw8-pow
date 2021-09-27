function pow(a,b) {
    let result = a;

    for (let i = 1; i < b; i++) {
        result *= a;
    }

    return result;
}

let a = prompt("a?", '');
let b = prompt("b?", '');

if (b < 1) {
    alert(`Степень ${b} не поддрживается, используйте натуральное число`);
} else {
    alert( pow(a,b) );
}