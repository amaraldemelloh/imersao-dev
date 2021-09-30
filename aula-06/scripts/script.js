let rafaTable = {nome: "Rafa", vitorias: 1, empates: 2, derrotas: 3, pontos: 0};
let pauloTable = {nome: "Paulo", vitorias: 1, empates: 2, derrotas: 3, pontos: 0};
let guiTable = {nome: "Gui", vitorias: 1, empates: 2, derrotas: 3, pontos: 0};
let players = [rafaTable, pauloTable, guiTable];

function calcPontos(player) {
	let pontos = (player.vitorias *3) +player.empates;
	return pontos;
};

function adicionarVitoria(i) {
	let player = players[i];
	player.vitorias++;
	player.pontos = calcPontos(player);
	exibirPlayers(players);
};

function adicionarDerrota(i) {
	let player = players[i];
	player.derrotas++;
	exibirPlayers(players);
};

function adicionarEmpate(i) {
	let player = players[i];
	player.empates++;
	player.pontos = calcPontos(player);
	exibirPlayers(players);
};

function exibirPlayers(players) {
	let elemento = "";
	for (let i = 0; i < players.length; i++) {
		elemento += "<tr>";
		elemento += "<td>" + players[i].nome + "</td>";
		elemento += "<td>" + players[i].vitorias + "</td>";
		elemento += "<td>" + players[i].empates + "</td>";
		elemento += "<td>" + players[i].derrotas + "</td>";
		elemento += "<td>" + players[i].pontos + "</td>";
		elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
		elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
		elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
		elemento += "</tr>"
	};
	let tablePlayers = document.getElementById('tabelaJogadores');
	tablePlayers.innerHTML = elemento;
};
exibirPlayers(players);

console.log(players);