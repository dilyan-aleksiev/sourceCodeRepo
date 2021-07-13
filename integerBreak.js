function solve(num) {

    let end = num - 1;
    let firstArr = range(1, end);
    let secondArr = range(1, end);
    let thirdArr = range(1, end);
    let fourthArr = range(1, end);
    let fifthArr = range(1, end);
    let maxMultiply = 1;
    let maxNums = [];

    for (let i = 0; i < firstArr.length; i++) {
        let currentNumfirstArr = firstArr[i];
        for (let j = i; j < secondArr.length; j++) {
            let currentNumSecondArr = secondArr[j];
            for (let k = j; k < thirdArr.length; k++) {
                let currentNumThirdArr = thirdArr[k];
                for (let h = k; h < fourthArr.length; h++) {
                    let currentNumFourthArr = thirdArr[h];
                    for (let t = h; t < fifthArr.length; t++) {
                        let currentNumFifthArr = thirdArr[t];
                        if ((currentNumfirstArr + currentNumSecondArr + currentNumThirdArr + currentNumFourthArr + currentNumFifthArr) == num) {
                            currentMultiply = currentNumfirstArr * currentNumSecondArr * currentNumThirdArr * currentNumFourthArr * currentNumFifthArr;
                            if (currentMultiply > maxMultiply) {
                                maxMultiply = currentMultiply;
                                maxNums = maxNums.splice();
                                maxNums.push(currentNumfirstArr);
                                maxNums.push(currentNumSecondArr);
                                maxNums.push(currentNumThirdArr);
                                maxNums.push(currentNumFourthArr);
                                maxNums.push(currentNumFifthArr);
                            }
                        }
                    }
                }
            }

        }

    }


    console.log(maxMultiply);
    console.log(maxNums);

    function range(start, end) {
        const ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }

}
solve(20)