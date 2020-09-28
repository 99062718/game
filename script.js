score = 0;
health = 10;
damageMulti = 1;

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
	console.log("moeilijkheid: " + diff);
}else if(diff == "medium"){
	console.log("moeilijkheid: " + diff);
}else if(diff == "hard"){
	console.log("moeilijkheid: " + diff);
}else{
	alert("Dit is geen optie!");
	location.reload();
}

console.log("level 1: Het kasteel is overgenomen door de draak zijn handlangers. Neem het kasteel terug.");
multiplier = diffCal();
answer = prompt("Bereken (12 - 3) x " + multiplier);
if(answer == (12 - 3) * multiplier){
	score++;
	console.log("(12 - 3) x " + multiplier + " = " + answer + ": correct!");
}else{
	health -= diffDamage();
	console.log("(12 - 3) x " + multiplier + " = " + answer + ": fout!");
	console.log(health + "/10");
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
	console.log(health + "/10");
	if(health < 1){
		alert("De trollen hebben je over hun kampvuur gehangen.\nJe zal herrinderd worden als een grote hulp,\nbij het herovernemen van het kasteel");
		location.reload();
	}
}

console.log("Het bos is lang en dichtbevolkt. Het overgrote aantal bomen blokkeren het meeste zonlicht dat het bos in wilt komen.");
multiplier = diffCal();
multiplier2 = diffCal();
answer = prompt("Je vind een kist in het donkere bos. Wil je het openen?");
if(answer == "ja"){
	alert("Een group slangen springt uit de kist.");
	if(diff == "hard"){
		answer = prompt("(" + multiplier + " x " + multiplier2 + " + 55) / 22")
		if(answer == (multiplier * multiplier2 + 55) / 22){
			score++;
			console.log("(" + multiplier + " x " + multiplier2 + " + 55) / 22 = " + answer + ": correct!");
			alert("De kist heeft een damage multiplier voor de draak in zich!");
			damageMulti++;
		}else{
			health -= diffDamage();
			console.log("(" + multiplier + " x " + multiplier2 + " + 55) / 22 = " + answer + ": fout!");
			console.log(health + "/10");
		}
	}else{
		answer = prompt(multiplier + " + 20 / " + multiplier);
		if(answer == multiplier + 20 / multiplier){
			score++;
			console.log(multiplier + " + 20 / " + multiplier + " = " + answer + ": correct!");
			alert("De kist heeft een health potion in zich!");
			health += 2;
			console.log(health + "/10");
		}else{
			health -= diffDamage();
			console.log(multiplier + " + 20 / " + multiplier + " = " + answer + ": fout!");
			console.log(health + "/10");
		}
	}
	if(health < 1){
		alert("De slangen waren teveel voor je.\nJe bent gestorven aan hun gif.");
		location.reload();
	}
}else{
	alert("Je laat de kist achter en gaat verder op jouw avontuur");
}

console.log("level 3: Als je het bos verlaat kom je uit op een groot gebergte. Het is een eenzame plaats, met weinig leven. Met de exceptie voor een grote trol. Hij ziet je en komt achter je aan.");
multiplier = diffCal();
multiplier2 = diffCal();
if(diff == "hard"){
	answer = prompt(multiplier + "^2 + (37 x " + multiplier2 + ")");
	if(answer == Math.pow(multiplier, 2) + (37 * multiplier2)){
		score++;
		console.log(multiplier + "^2 + (37 x " + multiplier2 + ") = " + answer + ": correct!");
	}else{
		health -= diffDamage();
		console.log(multiplier + "^2 + (37 x " + multiplier2 + ") = " + answer + ": fout");
		console.log(health + "/10");
	}
}else{
	answer = prompt("5 x 2 x " + multiplier + " / 5");
	if(answer == 5 x 2 x multiplier / 5){
		score++;
		console.log("5 x 2 x " + multiplier + " / 5 = " + answer + ": correct!");
	}else{
		health -= diffDamage();
		console.log("5 x 2 x " + multiplier + " / 5 = " + answer + ": fout!");
		console.log(health + "/10");
	}
}
if(health < 1){
	alert("Je bent gestorven door de grote trol.\nJe hebt het verder gemaakt dan de meeste");
	location.reload();
}

console.log("De trol slaat zijn grote knuppel om zich heen.");
multiplier= diffCal();
multiplier2 = diffCal() * 351;
if(diff == "hard"){
	answer == prompt(multiplier + " x 7 x " + multiplier2);
	if(answer == multiplier * 7 * multiplier2){
		score++;
		console.log(multiplier + " x 7 x " + multiplier2 + " = " + answer + ": correct!");
	}else{
		health -= diffDamage();
		console.log(multiplier + " x 7 x " + multiplier2 + " = " + answer + ": fout!");
		console.log(health + "/10");
	}	
}else{
	answer = prompt(multiplier + " x 7 x 34");
	if(answer == multiplier * 7 * 34){
		score++;
		console.log(multiplier + " x 7 x 34 = " + answer + ": correct!");
	}else{
		health -= diffDamage();
		console.log(multiplier + " x 7 x 34 = " + answer + ": fout!");
		console.log(health + "/10");
	}
}
if(health < 1){
	alert("Je bent gestorven door de grote trol.\nJe hebt het verder gemaakt dan de meeste");
	location.reload();
}

console.log("Je gebruikt je zwaard en steekt het in de trol. Het valt op de grond en is nu vrij zwak.")

