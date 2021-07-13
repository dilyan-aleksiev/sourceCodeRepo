// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string which contains templates containing '*'.
// Find the word with the exact same length as the template and replace it.

function solve(str1, str2) {

    words = str1.split(", ");

    for (el of words) {

        if (str2.includes(("*").repeat(el.length))) {
            str2 = str2.replace((("*").repeat(el.length)), el)
        }
    }

    console.log(str2);

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages');
    