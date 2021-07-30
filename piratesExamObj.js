function solve(input) {

    let currentLine = input.shift();
    let obj = {};

    while (currentLine !== "Sail") {
        let [town, citizens, gold] = currentLine.split("||");
        citizens = Number(citizens);
        gold = Number(gold);
        if (!obj.hasOwnProperty(town)) {
            obj[town] = {
                citizens,
                gold
            }
        } else {
            obj[town].citizens += citizens;
            obj[town].gold += gold;
        }
        currentLine = input.shift();
    }

    let nextLine = input.shift();

    while (nextLine !== "End") {
        let [command, town, deadCitizens, stolenGold] = nextLine.split("=>");
        if (command == "Plunder") {
            deadCitizens = Number(deadCitizens);
            stolenGold = Number(stolenGold);
            obj[town].citizens -= deadCitizens;
            obj[town].gold -= stolenGold;
            if ((((obj[town].citizens) == 0) || ((obj[town].gold)) == 0)) {
                console.log(`${town} plundered! ${stolenGold} gold stolen, ${deadCitizens} citizens killed.`);
                console.log(`${town} has been wiped off the map!`);
                delete obj[town];
            } else {
                console.log(`${town} plundered! ${stolenGold} gold stolen, ${deadCitizens} citizens killed.`);
            }
        } else if (command == "Prosper") {
            deadCitizens = Number(deadCitizens);
            if (deadCitizens > 0) {
                obj[town].gold += deadCitizens;
                console.log(`${deadCitizens} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }

        nextLine = input.shift();
    }

    let sortedObj = Object.entries(obj).sort((a, b) => {
        let firstTownGold = a[1].gold;
        let secondTownGold = b[1].gold;
        let firstTown = a[0];
        let secondTown = b[0];
        if (firstTownGold == secondTownGold) {
            return firstTown.localeCompare(secondTown);
        } else {
            return secondTownGold - firstTownGold;
        }
    });

    if (sortedObj.length > 0) {
        console.log(`Ahoy, Captain! There are ${sortedObj.length} wealthy settlements to go to:`);
        for (let kvp of sortedObj) {
            console.log(`${kvp[0]} -> Population: ${kvp[1].citizens} citizens, Gold: ${kvp[1].gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }


}
solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
])