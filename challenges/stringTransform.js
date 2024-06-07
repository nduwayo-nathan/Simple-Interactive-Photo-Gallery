// function transformString(s) {
//     const length = s.length;

//     if (length % 15 === 0) {
//         s = s.split('').reverse().join('');
//         s = Array.from(s).map(char => char.charCodeAt(0)).join(' ');
//     } else if (length % 3 === 0) {
//         s = s.split('').reverse().join('');
//     } else if (length % 5 === 0) {
//         s = Array.from(s).map(char => char.charCodeAt(0)).join(' ');
//     }

//     return s;
// }

// // Example usage:
// console.log(transformString("Hamburger"));          // Output: "regrubmaH"
// console.log(transformString("Pizza"));              // Output: "80 105 122 122 97"
// console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
function reverseString(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

function toASCII(s) {
    let ascii = '';
    for (let i = 0; i < s.length; i++) {
        ascii += s.charCodeAt(i) + ' ';
    }
    return ascii.trim();
}

function transformString(s) {
    const length = s.length;
    let transformed = '';

    if (length % 15 === 0) {
        transformed = reverseString(s);
        transformed = toASCII(transformed);
    } else if (length % 3 === 0) {
        transformed = reverseString(s);
    } else if (length % 5 === 0) {
        transformed = toASCII(s);
    }

    return transformed;
}

// Example usage:
console.log(transformString("Hamburger"));          // Output: "regrubmaH"
console.log(transformString("Pizza"));              // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
