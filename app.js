var express = require('express');//declara o módulo express quando ele já estiver instalado
var path = require('path');//declara o módulo path, que já vem instalado
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
let json;
//direciona o caminho dos seus recursos, como css, js, html para a pasta que você desejar, no caso, a public.
//Agora, é possível criar arquivos dentro dessa pasta que sobrescreverão o callback abaixo, como uma página index.html
app.use(express.static(path.join(__dirname, 'public')));


/*Requests*/
//Essa função diz que estamos utilizando o método get na home page (/)
app.get('/', function(req, res){
	res.send('Hello World3!')
});

//GetThemeId - Pega o ID do tema gerado pelo front e cria a estrutura de pastas
app.get('/api/1.0/theme/:themeID', function(req, res){
	cloneDir(req.params.themeID);
	res.send('Directory for theme: '+req.params.themeID+' created with success!');
})



//inicia o servidor na porta 3000
app.listen(process.env.PORT || 3000, function(){
	console.log("Hello Server!");
})
