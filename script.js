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
		return health;
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
	location.reload();
}

console.log("level 1: Het kasteel is overgenomen door de draak zijn handlangers. Neem het kasteel terug.");
multiplier = diffCal();
answer = prompt("Bereken 12 - 3 x " + multiplier);
if(answer == 12 - 3 * multiplier){
	score++;
	console.log("12 - 3 x " + multiplier + " = " + answer + ": correct!");
}else{
	health -= diffDamage();
	console.log("12 - 3 x " + multiplier + " = " + answer + ": fout!");
	if(health < 1){
		alert("je bent gestorven in het gevecht voor het kasteel.\nAlhoewel jouw verhaal kort was, \nzul je worden herrinderd als een moedig persoon.");
		location.reload();
	}
}

console.log("level 2: Door het mysterische bos, opweg naar de draak zijn hoge toren, kom je trollen tegen. De trollen willen je opeten.");
multiplier = diffCal();
answer = prompt("noem een cijfer hoger dan 33 x " + multiplier);
if(answer > 33 * multiplier){
	score++;
	console.log("33 * " + multiplier + " = " + answer + ": correct!");
}else{
	health -= diffDamage();
	console.log("33 * " + multiplier + " = " + answer + ": fout!");
	if(health < 1){
		alert("De trollen hebben je over hun kampvuur gehangen.\nJe zal herrinderd worden als een grote hulp,\nbij het herovernemen van het kasteel");
		location.reload();
	}
}
