document.getElementById("Again").addEventListener("click", Again);

var Chance = 3;
var flag = 1;
let LuckyNumber = Math.floor(Math.random() * 10 + 1);
console.log("Lucky number is: ", LuckyNumber);
function Compare()
{
	if (Chance == 0 && flag == 1)
	{
		Chance = 3;
		document.getElementById("Ads").style.display = "none";
		document.getElementById("AdsButton").style.display = "none";
		document.getElementById("PastGuess").innerHTML = "Your past guesses are: ";
		document.getElementById("PastGuess").style.display = "none";
	}

	document.getElementById("Error").style.display = "none";
	var UserNumber = document.getElementById("Input").value;

	if ( UserNumber == "")
	{
		document.getElementById("Error").style.display = "block";
		document.getElementById("Error").innerHTML = "Error: Empty. You need enter a number";
	}
	else if ( UserNumber == LuckyNumber)
	{
		document.getElementById("Message").style.display = "block";
		document.getElementById("Message").innerHTML = "<span id = 'True'>Congratulation! The lucky number is " + LuckyNumber + " and you found it!</span>";
		Chance = 3;
		flag = 1;
	}
	else if ( UserNumber < LuckyNumber)
	{
		Chance--;
		document.getElementById("Message").style.display = "block";
		document.getElementById("Message").innerHTML = 
			"<span id = 'False'>Your guess was too low, guess higher. You have " + Chance +
			" chance!</span>";
	}
	else
	{
		Chance--;
		document.getElementById("Message").style.display = "block";
		document.getElementById("Message").innerHTML = 
			"<span id = 'False'>Your guess was too high, guess lower. You have " + Chance +
			" chance!</span>";
	}

	if (Chance == 0 && flag == 1)
	{
		document.getElementById("Message").style.display = "block";
		document.getElementById("Message").innerHTML = "<span id = 'Lose'>Sorry! You lost the game! Click to Ads to get one more chance!</span>";
		document.getElementById("Ads").style.display = "block";
		document.getElementById("AdsButton").style.display = "block";
	}
	else if (Chance == 0 && flag == 0)
	{
		document.getElementById("Message").innerHTML = "<span id = 'Lose'>Sorry! You lost the game! " + LuckyNumber + " is a lucky number! Try again?</span>";
		Chance = 3;
		flag = 1;
	}

	if (Chance == 3 && flag == 1)
	{
		LuckyNumber = Math.floor(Math.random() * 10 + 1); 
		console.log("Lucky number is: ", LuckyNumber);
		document.getElementById("Ads").style.display = "none";
		document.getElementById("AdsButton").style.display = "none";
		document.getElementById("PastGuess").innerHTML = "Your past guesses are: ";
		document.getElementById("PastGuess").style.display = "none"
	}
	else
	{
		document.getElementById("PastGuess").style.display = "block";
		document.getElementById("PastGuess").innerHTML += UserNumber + " ";
	}

}

function GetChance()
{
	Chance++;
	flag = 0;
	document.getElementById("AdsButton").style.display = "none";
	document.getElementById("Ads").style.display = "none";
	var InputValue = document.getElementById("Input").value;
	if (InputValue > LuckyNumber)
	{
		document.getElementById("Message").innerHTML = "You got one chance! Guess lower!"
	}
	else
	{
		document.getElementById("Message").innerHTML = "You got one chance! Guess higher!"
	}
}

function Again()
{
	Chance = 3;
	flag = 1;
	LuckyNumber = Math.floor(Math.random() * 10 + 1); 
	console.log("Lucky number is: ", LuckyNumber);
	document.getElementById("Message").style.display = "none";
	document.getElementById("Ads").style.display = "none";
	document.getElementById("AdsButton").style.display = "none";
	document.getElementById("PastGuess").innerHTML = "Your past guesses are: ";
	document.getElementById("PastGuess").style.display = "none"
}
