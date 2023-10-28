//Lets have some points
let points: number = 34;
//We need to check what the Customer will win, we use if statements

if (points < 100) {
    console.log("You do not have sufficient Points")
}

else if (points >= 100 && points <= 500) {
    console.log("You win a Microwave")
}

else if (points > 500 && points <= 1000) {
    console.log("You win a Laptop")
}

else {
     console.log("You win a Trip to Mombasa")
}