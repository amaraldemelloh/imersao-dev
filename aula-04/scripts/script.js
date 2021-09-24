let urlAnimes = ['https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg',
'https://3.bp.blogspot.com/-oKA_lhTY6bc/WQxujmveQKI/AAAAAAAAAjQ/403y8C0Zz94Fge7Ij2SiUGJjgPUkNR-0QCK4B/w680/erased.jpg',
'http://1.bp.blogspot.com/-3Xt7yMeaAtU/U9X1cr1xh9I/AAAAAAAAAvE/7BjedAcFcGQ/s1600/sen-to-chihiro-no-kamikakushi-poster-3.jpg',
'https://upload.wikimedia.org/wikipedia/pt/thumb/4/47/Koe-no-Katachi-poster-film.jpg/240px-Koe-no-Katachi-poster-film.jpg',
'https://img.betaseries.com/WzYCQ10rsvYAhz55DqL76NeEoDE=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fd3a8a0c0b5233ad7fcb4227d72afabaa.jpg',
'https://metagalaxia.com.br/wp-content/uploads/2018/10/Seishun-Buta-Yarou-wa-Bunny-Girl-Senpai-no-Yume-wo-Minai-Recomenda%C3%A7%C3%B5es-de-Animes-da-Temporada-de-Outubro-Outono-2018.png',
'https://cdn.myanimelist.net/images/anime/1074/111944.jpg',
'https://img.assinaja.com/assets/tZ/004/img/219084_520x520.jpg',
'https://media.fstatic.com/ukhflY2MH7jQI5kc-LS6XuAXU4U=/210x312/smart/media/movies/covers/2014/08/princesa-mononoke_t10172_24.jpg'];
let nomeAnimes = ['Naruto Clássico','Erased','A Viagem de Chihiro','Koe No Katachi','Toradora','Bunny Girl Senpai','No Game No Life','Sword Art Online','Princesa Mononoke'];
let legendas = ["Gosto de Naruto desde sempre, mas veja só! Comecei a assistir esses meses mesmo, e olha, tá sendo muito divertido!","Eu me lembro de Erased ser um anime com bastante drama,curtia a pegada de ação. Não é o meu favorito, mas mesmo assim eu recomendaria.","Foi um anime muito emocionante, assim como qualquer anime do deus Hayao Myazaki. Esse anime cria um universoextremamente criativo e imersivo, eu recomendaria para qualquer um que goste de anime.","Koe No Katachi me deixava meio triste e meio animado pra terminar de ver a história,achei o romance entre os dois principais meio estranho mas vida que segue!","Toradora foi o melhor romance que já vi, sério mesmo, desde o primeiro ep você torce pelocasal principal e eles só ficam juntos no fim da série!", "Bunny Girl Senpai também teve um romancemuito estranho mas bem, é um romance é bem feito. No filme teve todo aquele lance com viagem no tempo,e normalmente isso fica ruim, mas em Bunny Girl Senpai fizeram viagem no tempo de uma forma sensacional.", "Eu não recomendaria, de forma alguma, meus deus que anime mais estranho, sério...Perdão se você é um fã de No Game No Life e está lendo isso, mas você é estranho.", "Sword Art Online,bem, acho que nunca terminei de ver mas vi o suficiente pra dizer. Este anime te leva a um lugartotalmente diferente, ele é muito imersivo.", "Foi um anime muito interessante, não me chamou tanto a atenção mas foi muito bom ter assistido, seja lá qual for o motivo."];
let i = 0
while (i < 4) {
	document.write("<img src='" + urlAnimes[i] + "' class='imgAnime' id='" + nomeAnimes[i] + "' title='" + legendas[i] + "'>");
	i++
}
let j = 0
function addAnime(j) {
	let div = document.getElementById('divAnimes');
	let button = document.getElementById('button' + j.toString());
	button.setAttribute('hidden', true)
	console.log(button);
	div.innerHTML = div.innerHTML + ("<img src='" + urlAnimes[j+3] + "' class='imgAnime' id='" + nomeAnimes[j+3] + "' title='" + legendas[j+3] + "'>");
}