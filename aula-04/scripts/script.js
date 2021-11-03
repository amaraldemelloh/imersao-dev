let urlAnimes = ['./assets/naruto.jpg','./assets/erased.jpg',
'./assets/viagem-de-chihiro.jpg','./assets/koe-no-katachi.jpg',
'./assets/toradora.jpg','./assets/bunny-girl-senpai.png',
'./assets/no-game-no-life.jpg','./assets/sword-art-online.jpg',
'./assets/princesa-mononoke.jpg'];
let nomeAnimes = ['Naruto Clássico','Erased','A Viagem de Chihiro','Koe No Katachi','Toradora','Bunny Girl Senpai','No Game No Life','Sword Art Online','Princesa Mononoke'];
let legendas = ['Gosto de Naruto desde sempre, mas veja só. Comecei a assistir esses meses mesmo, e olha, tá sendo muito divertido.',
'Eu me lembro de Erased ser um anime com bastante drama, curtia a pegada de ação. Não é o meu favorito, mas mesmo assim eu recomendaria.',
'Foi um anime muito emocionante, assim como qualquer anime do deus Hayao Myazaki. Esse anime cria um universo extremamente criativo e imersivo, eu recomendaria para qualquer um que goste de anime.',
'Koe No Katachi me deixava meio triste e meio animado pra terminar de ver a história, achei o romance entre os dois principais meio estranho mas vida que segue.',
'Toradora foi o melhor romance que já vi, sério mesmo, desde o primeiro ep você torce pelo casal principal e eles só ficam juntos no fim da série.',
'Bunny Girl Senpai também teve um romance muito estranho mas bem, é um romance e bem feito. No filme teve todo aquele lance com viagem no tempo, e normalmente isso fica ruim, mas em Bunny Girl Senpai fizeram viagem no tempo de uma forma sensacional.',
'Eu não recomendaria, de forma alguma, meus deus que anime mais estranho, sério... Perdão se você é um fã de No Game No Life e está lendo isso, mas você é estranho.',
'Sword Art Online, bem, acho que nunca terminei de ver mas vi o suficiente pra dizer. Este anime te leva a um lugar totalmente diferente, ele é muito imersivo.',
'Foi um anime muito interessante, não me chamou tanto a atenção mas foi muito bom ter assistido, seja lá qual for o motivo.'];
let i = 0;
while (i < 4) {
	document.write("<img src='" + urlAnimes[i] + "' class='imgAnime' id='" + nomeAnimes[i] + "' title='" + legendas[i] + "'>");
	i++;
};
let j = 0
function addAnime(j) {
	let div = document.getElementById('divAnimes');
	let button = document.getElementById('button' + j.toString());
	button.setAttribute('hidden', true);
	console.log(button);
	div.innerHTML = div.innerHTML + ("<img src='" + urlAnimes[j+3] + "' class='imgAnime' id='" + nomeAnimes[j+3] + "' title='" + legendas[j+3] + "'>");
};