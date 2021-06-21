interface NumberOfPlayers {
    good: number,
    evil: number
}

interface ConstantsInterface {
    totalNumberOfPlayers:
        Record<string, NumberOfPlayers>
}

const Constants: ConstantsInterface = {
    totalNumberOfPlayers: {
        '5': {
            good: 3,
            evil: 2
        },
        '6': {
            good: 4,
            evil: 2
        },
        '7': {
            good: 4,
            evil: 3,
        },
        '8': {
            good: 5,
            evil: 3
        },
        '9': {
            good: 6,
            evil: 3
        },
        '10': {
            good: 6,
            evil: 4
        }
    }
}
Object.freeze(Constants);

export {Constants}
