// helloWorld function 
function helloWorld(name) {
    if (name === true || name === false) {
        return "Hello, World!";
    }
    return `Hello, ${name}!`;
}

function isFive(num) {
    return num == 5;
}
function isEven(num) {
    return num % 2 == 0;
}

function isVowel(char) {
    let vowels = "aeiouAEIOU";
    if (char === "") {
        return false;
    }
    return vowels.includes(char);
}
console.log(isVowel(""))
