const selected = parseInt(prompt('Moedas [1]; KM/AnosLuz [2]; Estrelas [3]; Temperaturas [4]'));
const title = document.getElementById('page-title');
const subtitle = document.getElementById('page-subtitle');

let valorElemento = document.getElementById('valor');
let elementResult = document.getElementById('valorConvertido');
let elementResult2 = document.getElementById('valorConvertido2');

selectPage(selected)

function selectPage(selected) {
	if (selected == 1) {
		title.innerText = 'Conversor de Moedas';
		subtitle.innerText = 'Converta valores entre moedas';
	}
	if (selected == 2) {
		title.innerText = 'Conversor de Kilômetros e Anos Luz';
		subtitle.innerText = 'Converta distâncias entre kilômetros e anos luz';
	}
	if (selected == 3) {
		title.innerText = 'Distância entre Estrelas';
		subtitle.innerText = 'Saiba a distância de uma estrela a outra';
	}
	if (selected == 4) {
		title.innerText = 'Conversor de Temperaturas';
		subtitle.innerText = 'Converta temperaturas entre Celsius/Fahrenheit/Kelvin';
	}
}

function Converter() {
	let valorElemento = document.getElementById('valor');
	let elementResult = document.getElementById('valorConvertido');
	let elementResult2 = document.getElementById('valorConvertido2');

	if (selected == 1) {
		convertMoedas(valorElemento, elementResult);
	}
	if (selected == 2) {
		convertAnosLuz(valorElemento, elementResult);
	}
	if (selected == 3) {
		
	}
	if (selected == 4) {
		
	}
}

function convertMoedas(valorElemento, elementResult) {
	let moeda = prompt('Moeda inserida: BRL [1]; USD [2]; EUR [3]');
	let valor = parseFloat(valorElemento.value);
	
	if (moeda == 1) {
		elementResult.innerHTML = 'A converção para Dollar é de: ' + (valor /5.29).toFixed(2) + 'U$.';
		elementResult2.innerHTML = 'A converção para Euro é de: ' + (valor /6.20).toFixed(2) + '€';
	}
	if (moeda == 2) {
		elementResult.innerHTML = 'A converção para Real é de: ' + (valor *5.29).toFixed(2) + 'R$';
		elementResult2.innerHTML = 'A converção para Euro é de: ' + (valor /1.17).toFixed(2) + '€';
	}
	if (moeda == 3) {
		elementResult.innerHTML = 'A converção para Real é de: '+ (valor *6.20).toFixed(2) + 'R$';
		elementResult2.innerHTML = 'A converção para Dollar é de: ' + (valor *1.17).toFixed(2) + 'U$';
	}
}

function convertAnosLuz(valorElemento, elementResult) {
	let dist = prompt('Valor inserido: Kilômetros [1]; Anos Luz [2]')
	let valor = parseFloat(valorElemento.value);
	
	if (dist == 1) {
		elementResult.innerHTML = valor + 'km equivale a aproximadamente  ' + (valor /9,461e+12) + ' anos luz.';
	}
	if (dist == 2) {
		elementResult.innerHTML = valor + ' anos luz equivale a aproximadamente ' + (valor *9,461e+12) + 'km.';
	}
}