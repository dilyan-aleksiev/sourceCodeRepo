function solve(input) {

    let numberOfCars = input.shift();
    let obj = {};

    for (let i = 0; i < numberOfCars; i++) {
        let currentLine = input.shift();
        let [car, km, l] = currentLine.split("|");
        km = Number(km);
        l = Number(l);
        obj[car] = { km, l };
    }

    let nextLine = input.shift();
    while (nextLine !== "Stop") {
        nextLine = nextLine.split(" : ");
        if (nextLine[0] == "Drive") {
            let [car1, km1, l1] = [nextLine[1], nextLine[2], nextLine[3]];
            l1 = Number(l1);
            km1 = Number(km1);
            if ((obj[car1].l) > l1) {
                obj[car1].km += km1;
                obj[car1].l -= l1;
                console.log(`${car1} driven for ${km1} kilometers. ${l1} liters of fuel consumed.`);
                if (obj[car1].km > 100000) {
                    console.log(`Time to sell the ${car1}!`);
                    delete obj[car1];
                }
            } else if (((obj[car1].l) < l1)) {
                console.log("Not enough fuel to make that ride");
            }
        }
        if (nextLine[0] == "Refuel") {
            let [car1, refuelLiters] = [nextLine[1], Number(nextLine[2])];
            let currentTank = obj[car1].l;
            if ((currentTank + refuelLiters) >= 75) {
                let refuel = 75 - currentTank;
                obj[car1].l = 75;
                console.log(`${car1} refueled with ${refuel} liters`);
            } else {
                obj[car1].l += refuelLiters;
                console.log(`${car1} refueled with ${refuelLiters} liters`);
            }
        }
        if (nextLine[0] == "Revert") {
            let [car1, revertedKm] = [nextLine[1], nextLine[2]];
            if ((obj[car1].km - revertedKm) < 10000) {
                obj[car1].km = 10000;
            } else {
                obj[car1].km -= revertedKm;
                console.log(`${car1} mileage decreased by ${revertedKm} kilometers`);
            }
        }
        nextLine = input.shift();
    }

    //     let [car, km, l] = currentLine.split("|");
    //     obj[car] = { kilometers: km, liters: l };
    //     // obj[car] = { km,l };

    let objEntries = Object.entries(obj);

    objEntries = objEntries.sort((a, b) => {
        let carName1 = a[0];
        let carName2 = b[0];
        let kmCar1 = a[1].km;
        let kmCar2 = b[1].km;
        if (kmCar1 == kmCar2) {
            return carName1.localeCompare(carName2);
        } else {
            return kmCar2 - kmCar1;
        }
    });

    for (let kvp of objEntries) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].km} kms, Fuel in the tank: ${kvp[1].l} lt.`);
    }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);