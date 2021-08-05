function solve(input) {

    let health = 100;
    let bitcoins = 0;
    let rooms = 1;

    input = input.split("").join("").split("|");

    for (let el of input) {
        let [firstElement, secondElement] = el.split(" ");
        if (firstElement == "potion") {
            if ((health + Number(secondElement)) >= 100) {
                amountHelath = 100 - health;
                health = 100;
                console.log(`You healed for ${amountHelath} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                health += Number(secondElement);
                console.log(`You healed for ${secondElement} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        if (firstElement == "chest") {
            bitcoins += Number(secondElement);
            console.log(`You found ${secondElement} bitcoins.`);
        }
        if ((firstElement !== "chest") && (firstElement !== "potion")) {
            health -= Number(secondElement);
            if (health <= 0) {
                console.log(`You died! Killed by ${firstElement}.`);
                console.log(`Best room: ${rooms}`);
                break;
            } else {
                console.log(`You slayed ${firstElement}.`);
            }
        }
        rooms += 1;
    }

    if ((input.length + 1) == rooms) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}
solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');