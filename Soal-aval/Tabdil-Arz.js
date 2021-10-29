//                       ER is short for ExchangeRate

function moneyExchange(Debt, dollar, euro, dinar, dollarER, euroER, dinarER) {

    //*******************************************     if person enter anything instead of number in input :

    if (typeof Debt !== 'number' || typeof dollar !== 'number' ||
        typeof euro !== 'number' || typeof dinar !== 'number' ||
        typeof dollarER !== 'number' || typeof euroER !== 'number' || typeof dinarER !== 'number') {

        return `you should enter a number as an input`
    }

    //*******************************************     if person had less money than the debt :
    let Arr = []
    if (((dollar * dollarER) + (euro * euroER) + (dinar * dinarER)) < Debt) {
        return `0 way You dont have enough money to pay your debt`
    }

    //*******************************************     if person had equal money to the debt :

    else if (((dollar * dollarER) + (euro * euroER) + (dinar * dinarER)) === Debt) {
        return `only 1 way You have just enough money to pay your debt`
    }

    //*******************************************     now if input had no issue :

    else if (((dollar * dollarER) + (euro * euroER) + (dinar * dinarER)) > Debt) {

        let dollarWeHave = 0;
        let euroWeHave = 0;
        let dinarWeHave = 0;

        for (let i = 0; i <= dollar; i++) {
            dollarWeHave = i * dollarER;
            for (let j = 0; j <= euro; j++) {
                euroWeHave = j * euroER;
                for (let k = 0; k <= dinar; k++) {
                    dinarWeHave = k * dinarER;
                    if (Debt === (dollarWeHave + euroWeHave + dinarWeHave)) {
                        Arr.push("Bingo")
                    }
                }
            }
        }
        return `there is ${Arr.length} way you can pay your friend back`
    }

    //*******************************************     otherwise output is this :

    return `there is an issue we cant split your money to your dept`

}

console.log(moneyExchange(1000000,100,70,300,30000,25000,15000));
console.log(moneyExchange(100000, 2, 1, 3, 50000, 70000, 30000));
console.log(moneyExchange(60000, 3, 3, 3, 30000, 20000, 30000));
console.log(moneyExchange(43000, 2, 1, 1, 4200, 7500, 3600));