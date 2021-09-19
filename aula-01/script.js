const main = document.querySelector('.main')
let tool = parseInt(prompt("Celsius/Fahrenheit [1]; BRL/USD [2]:"))
let selected = ''

if (tool == 1) {
	selected = 'Celsius/Fahrenheit'
	var valor = prompt('Graus:')
} else if (tool == 2) {
	selected = 'BRL/USD'
	var valor = prompt('Valor:')
} else {
	alert('Caractere Inválido.')
}

result(selected, valor)

function result(selected, valor) {
		let p = document.createElement('p')
		if (tool == 1) {
			p.innerText = '(' + valor + 'C) - ' + selected + ': ' + (valor * (9/5) + 32) + 'F'
		}
		if (tool == 2) {
			p.innerText = '(' + valor + 'R$) - ' + selected + ': ' + (valor * 4.5) + '$'
		}
		main.appendChild(p)
}

let h1 = document.querySelector('.cabec h1')
h1.innerText = selected