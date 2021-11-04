//CONTANDO AS QUESTÕES
var a = 1
var acertos = 0
var erros = 0   

//DEFININDO IMAGEM INICIAL
var image = document.createElement("img")
if(a==1){
    image.src = "img/capa.png"
    document.getElementById("image").appendChild(image)
}

//CRIANDO QUESTÕES
var questao = {
    1:{
        pergunta:"Em qual cidade surgiu a COVID-19?",
        resposta:"Wuhan",
        altFalsa1:"Hong Kong",
        altFalsa2:"Xangai",
    },
    2:{
        pergunta:"Quando o Jeep Compass começou ser importado para o brasil?",
        resposta:"Em 2012",
        altFalsa1:"em 2015",
        altFalsa2:"Em 2018",
    }, 
    3:{
        pergunta:"Qual nome do Sheik mais rico de Dubai?",
        resposta:"Mansour bin Zayed Al Nahyan",
        altFalsa1:"Mohammed bin Rashid al-Maktoum",
        altFalsa2:"Khalifa Bin Zayed",
    },
    4:{
        pergunta:"Em qual ano foi criado o primeiro computador pessoal?",
        resposta:"em 1973",
        altFalsa1:"em 1970",
        altFalsa2:"em 1972",
    },
    5:{
        pergunta:"Qual nome do arquiteto que projetou o Cristo Redentor?",
        resposta:"Paul Landowsky",
        altFalsa1:"Henry Lohan Kodosky",
        altFalsa2:"David Lian Losanwsky",
    },
    6:{
        pergunta:"Em A Procura da Felicidade, Will Smith protagoniza o filme baseado na vida real de qual empresário?",
        resposta:"Chris Gardner",
        altFalsa1:"Jeff Bezos",
        altFalsa2:"Warren Buffett",
    },
    7:{
        pergunta:"Qual dessas linguagens de programação é a versão padronizada do JavaScript",
        resposta:"ECMAScript",
        altFalsa1:"Java",
        altFalsa2:"LiveScript",
    },
    8:{
        pergunta:"Qual foi a grande causa da 2º Guerra mundial?",
        resposta:"O expansionismo e o militarismo da Alemanha Nazista",
        altFalsa1:"O domínio do Japão sobre a China",
        altFalsa2:"A comercialização de armas do EUA",
    },
    9:{
        pergunta:"Qual presidente foi preso na investigação da operação Lava Jato?",
        resposta:"Luiz Inácio Lula da Silva",
        altFalsa1:"Fernando Henrique Cardoso",
        altFalsa2:"Michel Temer",
    },
    10:{
        pergunta:"Qual desses vilões não faz parte do Universo Marvel?",
        resposta:"Coringa",
        altFalsa1:"Thanos",
        altFalsa2:"Duende Verde",
    }
}

//EMBARALHANDO AS RESPOSTAS
function mudaResposta(x,v,f1,f2){
    var alternativas = document.getElementById('resposta')
        switch(x){            
            case 1:                
                alternativas.innerHTML = "<li name='certo'><i class='far fa-regular fa-circle' name='iconcerto'></i> "+ v +"</li>"
                                        +"<li name='errado'><i class='far fa-regular fa-circle' name='iconerrado'></i> "+ f1 +"</li>"
                                        +"<li name='errado'><i class='far fa-regular fa-circle' name='iconerrado'></i> "+ f2 +"</li>"
            break
            case 2:
                alternativas.innerHTML = "<li name='errado'><i class='far fa-regular fa-circle' name='iconerrado'></i> "+ f1 +"</li>"
                                        +"<li name='certo'><i class='far fa-regular fa-circle' name='iconcerto'></i> "+ v +"</li>"
                                        +"<li name='errado'><i class='far fa-regular fa-circle' name='iconerrado'></i> "+ f2 +"</li>"
            break
            case 3:
                alternativas.innerHTML = "<li name='errado'><i class='far fa-regular fa-circle' name='iconerrado'></i> "+ f2 +"</li>"
                                        +"<li name='errado'><i class='far fa-regular fa-circle' name='iconerrado'></i> "+ f1 +"</li>"
                                        +"<li name='certo'><i class='far fa-regular fa-circle' name='iconcerto'></i> "+ v +"</li>"             
            break
        }

    //VERIFICANDO SE O USUÁRIO RESPONDEU CERTO
    var respCerto = document.getElementsByName('certo')[0]
    respCerto.addEventListener('click', certo)
    var respErrado = document.getElementsByName('errado')[0]
    respErrado.addEventListener('click', errado)
    var respErrado = document.getElementsByName('errado')[1]
    respErrado.addEventListener('click', errado)
}

function lerPergunta(){     
    document.getElementById("resultado").setAttribute("class", "resultado h3" ) 
    if(a<=10){               
        //CRIANDO NUMERO ALEATÓRIO
        var aleatorio = Math.floor(Math.random() * 3) + 1

        // APRESENTANDO IMAGEM
        image.src = "img/"+a+".png"
        document.getElementById("image").appendChild(image)

        //APRESENTANDO PERGUNTAS
        var pergunta = questao[a]["pergunta"]
        var resposta = questao[a]["resposta"]
        var falsa1   = questao[a]["altFalsa1"]
        var falsa2   = questao[a]["altFalsa2"]
        document.getElementById('pergunta').innerHTML = pergunta

        //APRESENTANDO RESPOSTAS EMBARALHADAS
        mudaResposta(aleatorio,resposta,falsa1,falsa2)

        //APRESENTANDO CONTADOR ALTERADO 
        document.getElementById('contador').innerHTML = "( "+ a +"/"+"10 )"           
    }else{
        image.src = "img/capa-final.png"
        document.getElementById("image").appendChild(image)
        var pergunta = "RESULTADO DO QUESTIONÁRIO"
        document.getElementById('pergunta').innerHTML = pergunta
        resultado = document.getElementById('resposta')
        resultado.innerHTML = "<center><p><h3>ACERTOU: "+ acertos +"</p>"
                            +"<p>ERROU: "+ erros +"</p></h3></center>"
        document.getElementById('contador').innerHTML = "<button onclick='recomecar()'> FAZER NOVAMENTE</button>"                                        
    }    
}


//REINICIANDO O QUESTIONÁRIO
function recomecar(){
    document.location.reload(true);
}    

//CONFIGURANDO ALERTA DE MENSAGENS
function entraMsgcerta(){
    document.getElementById("resultado").setAttribute("class", "green animate__bounceIn " )
}
function saiMsgcerta(){
    document.getElementById("resultado").setAttribute("class", "green animate__bounceOut " )
}
function entraMsgerrada(){
    document.getElementById("resultado").setAttribute("class", "red animate__bounceIn " )
}
function saiMsgerrada(){
    document.getElementById("resultado").setAttribute("class", "red animate__bounceOut " )
}

//CONFIGURANDO CASO A RESPOSTA SEJA CERTA
function certo(){    
    var resultado = "CERTO"
    entraMsgcerta()
    document.getElementById('msgresult').innerHTML = "<i class='fas fa-check-square'></i> "+ resultado  
    ++acertos
    setTimeout(saiMsgcerta,2300);
    //MUDANDO A PERGUNTA       
    setTimeout(lerPergunta,3000);
    a++        
}

//CONFIGURANDO CASO A RESPOSTA SEJA ERRADA
function errado(){
    var resultado = "ERRADO"
    entraMsgerrada()
    document.getElementById('msgresult').innerHTML = "<i class='fas fa-window-close'></i> "+ resultado    
    ++erros
    setTimeout(saiMsgerrada,2300);
    //MUDANDO A PERGUNTA        
    setTimeout(lerPergunta,3000);
    a++
}
