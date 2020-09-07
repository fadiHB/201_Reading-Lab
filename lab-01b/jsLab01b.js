userName = prompt("what is your name ?")
alert("Welcome " + userName)
console.log("user name is" + console.log(userName))

userHappy = prompt("Are you happy with us?")
console.log("userHappy = " + userHappy)

if ( userHappy == "yes")
{
    alert("very glad to hear that")
}
else
{
    alert("we are very sorry for that")
}


userAge  = prompt("give us the year of ypur birthady")
console.log("user age is " + userAge)
function ageCal (userAge)
{
    return 2020-userAge
}

document.getElementById("age").innerHTML=ageCal (userAge)


userFood = prompt("do you like piza (y/n)?")
console.log("userFood =" + userFood)
if (userFood === "y") 
{
    document.write("Enjoy it");
    document.getElementById("pizzaId").src='pizz.jpg';
}

else
{
    document.write("oky,try this one");
    document.getElementById("pizzaId").src='pizz.jpg';
}


