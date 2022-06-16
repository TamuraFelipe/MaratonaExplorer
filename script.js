const inputQuestion = document.querySelector('#inputQuestion');
const divAnswer = document.querySelector('#resposta');

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza!",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim!",
    "Concentre-se e pergunte novamente",
    "Sinais apontam que sim."
]

const perguntaVazia = [
    "Faça uma pergunta, bestado!",
    "Você esqueceu de perguntar!",
    "Por favor, me use direito! Pergunte!",
    "Leia o botão!",
    "Prestenção... Faça um pergunta!",
    "Make me a question!"
]

const validaInput = inputQuestion.value;
function fazerPergunta(){
    if(inputQuestion.value === ""){
        const qtdPerguntaVazia = perguntaVazia.length;
        const numAleatorioPerguntaVazia = Math.floor(Math.random() * qtdPerguntaVazia);
        const respAleatoriaPerguntaVazia = perguntaVazia[numAleatorioPerguntaVazia];

        divAnswer.style.opacity = 1;
        divAnswer.innerHTML = "<div>" + respAleatoriaPerguntaVazia + "</div>";
        timeOpacity();
        
        return
    }
    
    const qtdResposta = respostas.length;
    const numAleatorio = Math.floor(Math.random() * qtdResposta);
    const respAleatoria = respostas[numAleatorio];    
    
    const question = "<div>" + inputQuestion.value + "</div>";
    divAnswer.innerHTML = question + respAleatoria;
    divAnswer.style.opacity = 1;
    timeOpacity();

    
    function timeOpacity(){
        setTimeout(function(){
            divAnswer.style.opacity = 0;
        }, 3000)
    }
}