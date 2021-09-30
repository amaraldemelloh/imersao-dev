let card1 = {nome: "Naruto", atrb: {
	atk: 8, def: 5, res: 10
	}
};
let card2 = {nome: "Sasuke", atrb: {
	atk: 7, def: 8, res: 7
	}
};
let card3 = {nome: "Sakura", atrb: {
	atk: 9, def: 4, res: 8
	}
};
let cards = [
	card1, card2, card3
];
let cardUser = '';
let cardRandom = '';

function sortearCarta() {
	cardUser = cards[parseInt(Math.random() *3)];
	cardRandom = cards[parseInt(Math.random() *3)];
	while (cardUser === cardRandom) {
		cardRandom = cards[parseInt(Math.random() *3)];
	};
	
	document.getElementById('btnSortear').disabled = true;
	document.getElementById('btnJogar').disabled = false;
	console.log(cardUser);
	console.log(cardRandom);
	options();
}

function options() {
	let div = document.getElementById('opcoes');
	for (let atrb in cardUser.atrb) {
		div.innerHTML += '<input type="radio" name="atributos" value="' + atrb + '">' + atrb + '</input>';
	};
};

function atributo() {
	let atributo = document.getElementsByName('atributos');
	for (let i = 0; i < atributo.length; i++) {
		if (atributo[i].checked == true) {
			return atributo[i].value;
		};
	};
};

function jogar() {
	let atrbSelec = atributo();
	let atrbUser = cardUser.atrb[atrbSelec];
	let atrbRandom = cardRandom.atrb[atrbSelec];
	let result = document.getElementById('resultado');
	
	if (atrbUser > atrbRandom) {
		result.innerHTML = '<h2>Você venceu!</h2>';
	} else if (atrbUser < atrbRandom) {
		result.innerHTML = '<h2>Você perdeu!</h2>';
	} else {
		result.innerHTML = '<h2>Empatou!</h2>';
	};
};