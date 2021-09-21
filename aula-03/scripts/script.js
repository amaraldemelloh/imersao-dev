let elementResult = document.getElementById('resultado');
let i = 3;
let correctNumber = parseInt(Math.random() *11);

function Chutar() {
	while(i > 0) {
		let userNumber = parseInt(document.getElementById('valor').value);
		
		if (userNumber < 0 || userNumber > 10) {
			alert('Informe apenas números de 0 a 10.');
			return;
		} else if (userNumber === correctNumber) {
			elementResult.textContent = 'Parabéns, você acertou!';
			return;
		} else if (userNumber > correctNumber) {
			elementResult.textContent = 'O número correto é menor...';
			i--;
			return;
		} else if (userNumber < correctNumber) {
			elementResult.textContent = 'O número correto é maior...';
			i--;
			return;
		}
	}
	alert('Você errou! O número era ' + correctNumber);
}