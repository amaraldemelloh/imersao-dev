let listaWall = [];
let listaUrl = [];
let listaElementos = [];
let divWall = document.getElementById('listaWall');
function adicionarWall() {
	let valueWall = document.getElementById('wall').value;
	if (valueWall.endsWith(".jpg")) {
		listaWall.push('wall_' + listaWall.length.toString());
		listaUrl.push(valueWall);
		listaElementos.push('<div id="' + listaWall[(listaWall.length)-1] + '"><img src="' + valueWall + '"><h2>' + listaWall[(listaWall.length)-1] + '</h2></div>');
		listarWall();
	} else {
		console.error('Você inseriu uma imagem com terminação diferente de ".jpg"');
		return;
	};
};
function listarWall() {
	divWall.innerHTML = "";
	for (let i = 0; i < listaWall.length; i++) {
		divWall.innerHTML += listaElementos[i];
	};
};