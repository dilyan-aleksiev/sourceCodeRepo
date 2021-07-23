function solve(input) {

    let codedMessage = input.shift();
    //console.log(codedMessage);

    for (let el of input) {
        el = el.split(":|:")
            //console.log(el);
        if (el[0] == "Reveal") {
            console.log(`You have a new text message: ${codedMessage}`);
        } else if (el[0] == "ChangeAll") {
            while (codedMessage.indexOf(el[1]) > -1) {
                codedMessage = codedMessage.replace(el[1], el[2]);
            }
            console.log(codedMessage);
        } else if (el[0] == "Reverse") {
            if (codedMessage.includes(el[1])) {
                codedMessage = codedMessage.replace(el[1], "");
                el[1] = el[1].split("").reverse().join("");
                codedMessage = codedMessage.concat(el[1]);
                console.log(codedMessage);
            } else {
                console.log("error");
            }
        } else if (el[0] == "InsertSpace") {
            codedMessage = codedMessage.substring(0, Number(el[1])) + " " + codedMessage.substring(Number(el[1]));
            console.log(codedMessage);
        }

    }

}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'

]);