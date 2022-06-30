let img = window.document.getElementById('imagem')
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "No Incrível Hulk, o que Tony diz a Thaddeus no final do filme?",
    alternativaA : "Ele quer estudar o Hulk",
    alternativaB : "Ele sabe sobre a SHIELD",
    alternativaC : "Eles estão montando uma equipe",
    alternativaD : "Que Thaddeus lhe deve dinheiro",
    correta      : "Eles estão montando uma equipe",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual a raça alienígena que Loki envia para invadir a Terra?",
    alternativaA : "Os Chitauri",
    alternativaB : "Os Skrulls",
    alternativaC : "O Kree",
    alternativaD : "Os Flerkens",
    correta      : "Os Chitauri",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Onde Peggy diz a Steve que ela quer encontrá-lo para uma dança?",
    alternativaA : "The Cotton Club",
    alternativaB : "A Stork Club",
    alternativaC : "El Marrocos",
    alternativaD : "Copacabana",
    correta      : "A Stork Club",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é o nome do garotinho que Tony faz amizade?",
    alternativaA : "Harry",
    alternativaB : "Henry",
    alternativaC : "Harley",
    alternativaD : "Holden",
    correta      : "Harley",

}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O que Soldado Invernal disse quando Steve o reconheceu pela 1° vez?",
    alternativaA : "Eu conheço você?",
    alternativaB : "Ele se foi.",
    alternativaC : "O que você disse?",
    alternativaD : "Quem diabos é Bucky?",
    correta      : "Quem diabos é Bucky?",

}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Que música Baby Groot dança no final do filme Guardian of the Galaxy?",
    alternativaA : "I Want You Back",
    alternativaB : "Cherry Bomb",
    alternativaC : "Ain't No Mountain High Enough",
    alternativaD : "Hooked On A Feeling",
    correta      : "I Want You Back",

}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Por quê Tony Stark rejeitou a Mark 2?",
    alternativaA : "Ela foi destruida durante a batalha",
    alternativaB : "Porque ela não alcançava as alturas",
    alternativaC : "Ela acabou quebrando em seus testes",
    alternativaD : "Pelo seu poder de ataque ser inferior",
    correta      : "Porque ela não alcançava as alturas",

}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quem são os seres responsáveis pela criação das Pedras?",
    alternativaA : "Os Criadores",
    alternativaB : "Entidades",
    alternativaC : "Os Guardiões",
    alternativaD : "Entidades Cósmicas",
    correta      : "Entidades Cósmicas",

}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é o nome do machado que é forjado para o Thor?",
    alternativaA : "Stormbreaker",
    alternativaB : "Mijrorno",
    alternativaC : "Lightbreaker",
    alternativaD : "Thunderpower",
    correta      : "Stormbreaker",

}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual filme da Marvel que não possui cenas pós-créditos?",
    alternativaA : "Era de Ultron",
    alternativaB : "Homem de Ferro 2",
    alternativaC : "Viúva Negra",
    alternativaD : "Endgame",
    correta      : "Endgame",

} 

const q11 = {
    numQuestao   : 11,
    pergunta     : "Qual o nome do universo microscópico que o Homem-Formiga viaja?",
    alternativaA : "Mundo Quântico",
    alternativaB : "Reinado Molecular",
    alternativaC : "Reino Quântico",
    alternativaD : "Energia Quântica",
    correta      : "Reino Quântico",

} 

const q12 = {
    numQuestao   : 12,
    pergunta     : "Em que aeroporto alemão ocorre o choque dos Vingadores?",
    alternativaA : "Flughafen",
    alternativaB : "Leipzig",
    alternativaC : "Ebene",
    alternativaD : "Sessel",
    correta      : "Leipzig",

} 

const q13 = {
    numQuestao   : 13,
    pergunta     : "Qual planeta Peter Quill recupera o Orbe?",
    alternativaA : "Morag",
    alternativaA : "Xandar",
    alternativaB : "Sakaar",
    alternativaC : "Ego",
    alternativaD : "Niflheim",
    correta      : "Morag",

} 

const q14 = {
    numQuestao   : 14,
    pergunta     : "Como se chamava o traje de encolhimento semelhante ao do Scott Lang?",
    alternativaA : "Simbionte",
    alternativaB : "Jaqueta Amerela",
    alternativaC : "Traje Quântico",
    alternativaD : "Encolhedor Amarelo",
    correta      : "Jaqueta Amerela",

} 

const q15 = {
    numQuestao   : 15,
    pergunta     : "Como Hulk foi parar em Sakaar?",
    alternativaA : "Sendo expulso da Terra",
    alternativaB : "Sendo telesportado",
    alternativaC : "Com o quinjet",
    alternativaD : "Com o teserackt",
    correta      : "Com o quinjet",

} 


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }


    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
        proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    img.src = 'fotomarvel.jpg'

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}


