score = 0;
health = 10;

function diffCal(){
	if(diff == "easy"){
		return 1;
	}else if(diff == "medium"){
		return 4;
	}else if(diff == "hard"){
		return Math.ceil(Math.random() * 10 + 5);
	}
}

function diffDamage(){
	if(diff == "easy"){
		return 2;
	}else if(diff == "medium"){
		return 5;
	}else if(diff == "hard"){
		return 10;
	}
}

alert("De princess is meegenomen door de draak! \nHaal haar terug... Met rekenen!");
diff = prompt("Kies een moeilijkheidslevel (easy/medium/hard)");

if(diff == "easy"){
	console.log("moeilijkheid :" + diff);
}else if(diff == "medium"){
	console.log("moeilijkheid :" + diff);
}else if(diff == "hard"){
	console.log("moeilijkheid :" + diff);

}else{
	alert("Dit is geen optie!");
}

console.log("level 1: Het casteel is overgenomen door de draak zijn handlangers. Neem het casteel terug.");
multiplier = diffCal();
answer = prompt("Bereken 12 - 3 x " + multiplier);
if(answer == 12 - 3 * multiplier){
	score++;
	console.log("12 - 3 x " + multiplier + " = " + answer + ": correct!");
}else{
	health -= diffDamage();
	console.log("12 - 3 x " + multiplier + " = " + answer + ": fout!")
}
