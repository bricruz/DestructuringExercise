const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3

}

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

//or

//const { price, quantity, teaName } = teaOrder;
const { origin } = teaOrder;
//rest
const { price, quantity, teaName, ...others } = teaOrder;
//spread
const newTea = { ...teaOrder }

const { brewTemp: temp = 175 } = teaOrder;

//renaming with destructuring

const { teaName: tea } = teaOrder;

function checkout(tea) {
    const { quantity = 1, price } = tea;
    return quantity * price;
}
checkout(teaOrder);

const teaOrder2 = {
    variety: 'green',
    teaName: 'silver needle',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    //quantity: 4

}

//destructuring arrays

const students = [
    { name: 'Drake', gpa: 4.6 },
    { name: 'Frank', gpa: 3.7 },
    { name: 'Ann', gpa: 3.6 },
    { name: 'Beth', gpa: 1.5 },
    { name: 'Harry', gpa: 2.6 },
]

//const [topStudent, secondStudent, , fourthStudent] = students;
const [topStudent, ...losers] = students;

//destructuring functions

function getTotal({ quantity: qty = 1, price }) {
    return qty * price;
}

const longJumpResults = ['tammy', 'jessica', 'alex', 'jenny'];
function awardMedals([gold, silver, bronze]) {
    return {
        gold,
        silver,
        bronze
    };
}

//nested destructuring

const instructor = {
    id: 44,
    name: 'Colt',
    isHilarious: true,
    funFacts: {
        favoriteFood: 'Burrito',
        favoriteDrink: 'Old Fashioned',
    }
};
const { funFacts: { favoriteFood, favoriteDrink } } = instructor;
console.log(favoriteFood);

const movies = {
    Ratings: [
        { Source: 'Internet Movie Database', Value: '8.3/10' },
        { Source: 'Rotten Tomatoes', Value: '93%' },
        { Source: 'MetaCritic', Value: '88/100' }
    ]
}

const { Ratings: [{ Value: imdbRating }, { Value: rtRating }, { Value: metaRating }] } = movies;

//destructuring swapping variables

let delicious = 'mayo';
let disgusting = 'whipped cream';

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;
[disgusting, delicious] = [delicious, disgusting];

