function solve(input) {

    let firstLine = input.shift();
    firstLine = firstLine.split(", ");
    let arr = [];

    for (let el of firstLine) {
        arr.push(el);
    }

    let nextLine = input.shift();

    while (nextLine !== "Craft!") {
        let [firstElement, secondElement] = nextLine.split(" - ");
        if (firstElement == "Collect") {
            if (!arr.includes(secondElement)) {
                arr.push(secondElement);
            }
        }
        if (firstElement == "Drop") {
            if (arr.includes(secondElement)) {
                let indexOfElement = arr.indexOf(secondElement);
                arr.splice(indexOfElement, 1);
            }
        }
        if (firstElement == "Combine Items") {
            [oldItem, newItem] = secondElement.split(":");
            if (arr.includes(oldItem)) {
                let indexOfOldElement = arr.indexOf(oldItem);
                arr.splice(indexOfOldElement + 1, 0, newItem);
            }
        }
        if (firstElement == "Renew") {
            if (arr.includes(secondElement)) {
                let indexOfRenewElement = arr.indexOf(secondElement);
                arr.splice(indexOfRenewElement, 1);
                arr.push(secondElement);
            }

        }
        nextLine = input.shift();
    }

    let result = arr.join(", ");
    console.log(result);

}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);