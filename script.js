const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se depara com uma foto de um casal homossexual nas redes sociais e, ao ler os comentários, encontra diversas manifestações de julgamento e crítica. o que você pensa a respeito?",
        alternativas: [
            {
                texto: "Eu acho que isso mostra como a intolerância ainda está presente em muitas pessoas. Infelizmente, tem muita gente que não aceita a diversidade e sente que tem o direito de julgar, o que é bem errado. As redes sociais acabam amplificando esse tipo de comentário, mas também podem ser usadas para ensinar as pessoas sobre respeito e igualdade."
                afirmacao: "Você acredita que a mudança depende de cada um de nós. A gente precisa aprender mais sobre empatia, ser mais educado e combater o preconceito no dia a dia, tanto online quanto offline, para que todo mundo, independentemente da sexualidade, seja respeitado."
            },
            {
                texto: "Acho que as redes sociais são um lugar onde as pessoas têm opiniões bem diferentes, mas também vejo isso como uma chance de normalizar o amor entre pessoas do mesmo sexo. Mesmo com comentários negativos, eu acredito que quanto mais visibilidade e apoio as pessoas LGBTQIA+ tiverem, mais a sociedade vai aprender a respeitar e aceitar."
                afirmacao: "Você vê as redes sociais como uma ferramenta para aumentar a visibilidade e o respeito, acreditando que, com o tempo, a sociedade vai se tornar mais aberta e menos preconceituosa, ajudando a reduzir esses julgamentos."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Você está na escola com seus amigos, assistindo a vídeos no tik tok, e aparece um vídeo de alguém acima do peso, alguns de seus amigos querem comentar algo inapropriado que claramente poderá entristecer a pessoa do vídeo, o que você faz?
        alternativas: [
            {
                texto: "Eu falaria para eles pararem e os lembraria de que, antes de comentar qualquer coisa, é importante pensar no impacto que isso pode ter na pessoa do vídeo. Ninguém merece ser alvo de piadas por causa do corpo, e a gente tem que ser mais consciente sobre o que compartilhamos nas redes.",
                afirmacao: "Você entende que as palavras podem causar muito mais impacto do que imaginamos, e acredita que a mudança começa com atitudes mais conscientes. A sua intervenção pode ajudar a criar um ambiente mais respeitoso online e nas interações do dia a dia."
            },
            {
                texto: "Eu ficaria na minha e não diria nada. Sei que é errado, mas, às vezes, é difícil interromper uma piada ou se opor ao que os outros estão fazendo, principalmente para não causar um desconforto no grupo."
                afirmacao: "Você percebe que, embora a pressão social possa fazer você hesitar, é importante refletir sobre o que pode ser feito para não alimentar comportamentos tóxicos. Isso te faz pensar sobre como seria mais fácil fazer a coisa certa se tivéssemos mais coragem para agir contra o que é errado."
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
