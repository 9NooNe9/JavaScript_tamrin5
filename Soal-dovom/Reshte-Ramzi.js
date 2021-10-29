function Scripting(stringLength, repeat, string) {
    let string1 = '';
    let string2 = '';

    //            finding common bugs

    if (stringLength < 1 || stringLength > 100 || typeof (stringLength) !== "number") {
        return `length of the string must be between 1 and 100`
    }
    if (repeat < 1 || repeat > 100 || typeof (repeat) !== "number") {
        return `numbers of iteration must be between 1 and 100`
    }
    if (stringLength !== string.length) {
        return `length of the string does not equal to stringLength`
    }

    for (let i = 0; i < repeat; i++) {
        string1 = string.substr(0, stringLength - 1)
        string = string[stringLength - 1].concat(string1)

        for (let j = 0; j < stringLength; j++) {
            let stringCharCode = string.charCodeAt(j)
            if (stringCharCode === 122) stringCharCode = 96
            if (stringCharCode === 90) stringCharCode = 64
            if (stringCharCode === 57) stringCharCode = 47
            string2 = string2.concat(String.fromCharCode(stringCharCode + 1))
        }
        string = string2
        string2 = ''
    }
    return string
}

console.log(Scripting(5, 3, "abcde"))
console.log(Scripting(3, 1, "abz"))
console.log(Scripting(5, 2, "613ag"))
console.log(Scripting(8, 6, "94zeas16"))
