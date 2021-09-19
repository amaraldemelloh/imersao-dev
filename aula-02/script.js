const selected = parseInt(prompt('Moedas [1]; KM/AnosLuz [2]; Estrelas [3]; Temperaturas [4]'));
const title = document.getElementById('page-title');
const subtitle = document.getElementById('page-subtitle');

let valorElemento = document.getElementById('valor');
let elementResult = document.getElementById('valorConvertido');
let elementResult2 = document.getElementById('valorConvertido2');
let elementResult3 = document.createElement('h2');

selectPage(selected);

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
		let label = document.getElementById('label')
		title.innerText = 'Distância entre Estrelas';
		subtitle.innerText = 'Saiba a distância de uma estrela a outra';
		label.innerHTML = 'Sol [1]; Sirius [2]; Canopus [3]:';
	}
	if (selected == 4) {
		title.innerText = 'Conversor de Temperaturas';
		subtitle.innerText = 'Converta temperaturas entre Celsius/Fahrenheit/Kelvin';
	}
}

function Converter() {
	let valor = parseFloat(valorElemento.value);

	if (selected == 1) {
		convertMoedas(valor);
		let div = document.getElementById('divId');
		div.appendChild(elementResult3);
		elementResult3.id = 'valorConvertido3';
	}
	if (selected == 2) {
		convertAnosLuz(valor);
	}
	if (selected == 3) {
		distEstrelas(valor);
	}
	if (selected == 4) {
		convertGraus(valor);
	}
}

function convertMoedas(valor) {
	let moeda = prompt('Moeda inserida: BRL [1]; USD [2]; EUR [3]');
	
	if (moeda == 1) {
		elementResult.innerHTML = 'A converção para Dollar é de: ' + (valor /5.29).toFixed(2) + 'U$.';
		elementResult2.innerHTML = 'A converção para Euro é de: ' + (valor /6.20).toFixed(2) + '€';
		elementResult3.innerHTML = 'A converção para Bitcoin é de: ' + (valor *251.700).toFixed(2) + '₿.';
	}
	if (moeda == 2) {
		elementResult.innerHTML = 'A converção para Real é de: ' + (valor *5.29).toFixed(2) + 'R$';
		elementResult2.innerHTML = 'A converção para Euro é de: ' + (valor /1.17).toFixed(2) + '€';
		elementResult3.innerHTML = 'A converção para Bitcoin é de: ' + (valor *47.570).toFixed(2) + '₿.';
	}
	if (moeda == 3) {
		elementResult.innerHTML = 'A converção para Real é de: '+ (valor *6.20).toFixed(2) + 'R$';
		elementResult2.innerHTML = 'A converção para Dollar é de: ' + (valor *1.17).toFixed(2) + 'U$';
		elementResult3.innerHTML = 'A converção para Bitcoin é de: ' + (valor *40.620).toFixed(2) + '₿.';
	}
}

function convertAnosLuz(valor) {
	let dist = prompt('Valor inserido: Kilômetros [1]; Anos Luz [2]');
	
	if (dist == 1) {
		elementResult.innerHTML = valor + 'km equivale a aproximadamente  ' + (valor /(9.461 *(10 **12))) + ' anos luz.';
	}
	if (dist == 2) {
		elementResult.innerHTML = valor + ' anos luz equivale a aproximadamente ' + (valor *(9.461 *(10 **12))) + 'km.';
	}
}

function distEstrelas(valor) {
	if (valor == 1) {
		elementResult.innerHTML = 'A distância entre o Sol e Sirius é de 8.6 anos luz.'
		elementResult2.innerHTML = 'A distância entre o Sol e Canopus é de 310 anos luz.'
	}
	if (valor == 2) {
		elementResult.innerHTML = 'A distância entre Sirius e o Sol é de 8.6 anos luz.'
		elementResult2.innerHTML = 'A distância entre Sirius e Canopus é de 301,4 anos luz.'
	}
	if (valor == 3) {
		elementResult.innerHTML = 'A distância entre Canopus e o Sol é de 310 anos luz.'
		elementResult2.innerHTML = 'A distância entre Canopus e Sirius é de 301,5 anos luz.'
	}
}

function convertGraus(valor) {
	let temper = prompt('Medida inserida: Celsius [1]; Fahrenheit [2]; Kelvin [3]')
	if (temper == 1) {
		elementResult.innerHTML = valor + '°C equivale a ' + ((valor *1.8) +32) + '°F'
		elementResult2.innerHTML = valor + '°C equivale a ' + (valor +273.15) + 'K'
	}
	if (temper == 2) {
		elementResult.innerHTML = valor + '°F equivale a ' + ((valor -32) /1.8) + '°C'
		elementResult2.innerHTML = valor + '°F equivale a ' + ((valor +459.67) /1.8) + 'K'
	}
	if (temper == 3) {
		elementResult.innerHTML = valor + 'K equivale a ' + (valor -273.15) + '°C'
		elementResult2.innerHTML = valor + 'K equivale a ' + ((valor *1.8) -459.67) + '°F'
	}
}