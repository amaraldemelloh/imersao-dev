let card1 = {nome: "Naruto Uzumaki", imagem: "https://i.pinimg.com/originals/b4/2e/d8/b42ed890afff0ac0c44378ee9ee3d97c.jpg", atrb: {
		atk: 8, def: 5, res: 10
	}
};
let card2 = {nome: "Sasuke Uchiha", imagem: "https://i.pinimg.com/736x/62/ed/b8/62edb8be3295c6c7f51cfa6a5320bd07.jpg", atrb: {
		atk: 7, def: 8, res: 7
	}
};
let card3 = {nome: "Sakura Haruno", imagem: "https://i.pinimg.com/originals/ac/e6/e8/ace6e850a662c809adafeefb166cab76.jpg", atrb: {
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
	userExibImagem();
}

function userExibImagem() {
	let userImagem = document.getElementById('carta-jogador');
	userImagem.style.backgroundImage = `url('${cardUser.imagem}')`;
	let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
	let divOpcoes = '<div id="opcoes" class="carta-status">';
	let opcoesTexto = '';
	for (let atrb in cardUser.atrb) {
		opcoesTexto += '<input type="radio" name="atributos" value="' + atrb + '">' + atrb + ' : ' + cardUser.atrb[atrb] + "<br>";
	};
	let nome = `<p class='carta-subtitle'>${cardUser.nome}</p>`;
	userImagem.innerHTML = moldura + nome + divOpcoes + opcoesTexto + '</div>';
};

function randomExibImagem() {
	let randomImagem = document.getElementById('carta-maquina');
	randomImagem.style.backgroundImage = `url('${cardRandom.imagem}')`;
	let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
	let divOpcoes = '<div id="opcoes" class="carta-status">';
	let opcoesTexto = '';
	for (let atrb in cardRandom.atrb) {
		opcoesTexto += '<p type="text" name="atributos" value="' + atrb + '">' + atrb + ' : ' + cardRandom.atrb[atrb] + "</p>";
	};
	let nome = `<p class='carta-subtitle'>${cardRandom.nome}</p>`;
	randomImagem.innerHTML = moldura + nome + divOpcoes + opcoesTexto + '</div>';
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
		result.innerHTML = '<p class="resultado-final">Você venceu!</p>';
	} else if (atrbUser < atrbRandom) {
		result.innerHTML = '<p class="resultado-final">Você perdeu!</p>';
	} else {
		result.innerHTML = '<p class="resultado-final">Empatou!</p>';
	};
	document.getElementById('btnJogar').disabled = true;
	randomExibImagem();
};