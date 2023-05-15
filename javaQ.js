var r1,r2,r3,r4,r5

// Pergunta 1 (Algoritmo)



function a1() {
    r1 = "Papelão";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}


function b1() {
    r1 = "Isopor";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}


function c1() {
    r1 = "Tijolos";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}

function e1() {
    if (document.getElementById("resp1input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r1 = document.getElementById("resp1input").value;
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("suresp1").style.display = "none";
    console.log(r1)
    }
}

function d1() {
    r1 = "Caixas de papelao";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}

function eresp1() {
    document.getElementById("pergunta1").style.display = "none";
    document.getElementById("suresp1").style.display = "flex";
}

function volt1() {
    document.getElementById("pergunta1").style.display = "block";
    document.getElementById("suresp1").style.display = "none"
}


// Pergunta 2 ( Algoritimo )


function a2() {
    r2 = "Piso de bamboo";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}


function b2() {
    r2 = "Madeira de reflorestamento";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}


function c2() {
    r2 = "Piso de caixa de leites recicladas";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}

function e2() {
    if (document.getElementById("resp2input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r2 = document.getElementById("resp2input").value;
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("suresp2").style.display = "none";
    console.log(r2)
    }
}

function d2() {
    r2 = "Papelão";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}

function eresp2() {
    document.getElementById("pergunta2").style.display = "none";
    document.getElementById("suresp2").style.display = "flex";
}

function volt2() {
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("suresp2").style.display = "none"
}



// Pergunta 3 ( Algoritimo )


function a3() {
    r3 = "Cadeiras";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}


function b3() {
    r3 = "Mesa de Jantar";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}


function c3() {
    r3 = "Prateleiras";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}

function e3() {
    if (document.getElementById("resp3input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r3 = ("paredes - ")+document.getElementById("resp3input").value;
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("suresp3").style.display = "none";
    console.log(r1)
    }
}

function d3() {
    r3 = "Armarios";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}

function eresp3() {
    document.getElementById("pergunta3").style.display = "none";
    document.getElementById("suresp3").style.display = "flex";
}

function volt3() {
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("suresp3").style.display = "none"
}



// Pergunta 4 ( Algoritimo )


function a4() {
    r4 = "+ Móveis";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}


function b4() {
    r4 = " + Comodos";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}


function c4() {
    r4 = " Divulgação ( panfletos etc ) ";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}

function e4() {
    if (document.getElementById("resp4input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r4 = document.getElementById("resp4input").value;
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("suresp4").style.display = "none";
    console.log(r4)
    }
}

function d4() {
    r4 = "Tecnologia (videos etc...)";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}

function eresp4() {
    document.getElementById("pergunta4").style.display = "none";
    document.getElementById("suresp4").style.display = "flex";
}

function volt4() {
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("suresp4").style.display = "none"
}


// Pergunta 5 ( Algoritimo )


function e5() {
    if (document.getElementById("resp5input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r5 = document.getElementById("resp5input").value;
    document.getElementById("terminal6").style.display = "block";
    document.getElementById("suresp5").style.display = "none";
    console.log(r5)
    }
document.getElementById("mensagem").innerHTML = "1 - Do que você gostaria de que fossem feita as paredes da Casa sustentavél = "
+r1+" | 2 - Qual material você acha que poderia ser ultilizado no piso da casa sustentável = "
+r2+" | 3 - Qual tipo de móbilia você gostaria de ver sendo ultilizada na casa sustentavel = "
+r3+" | 4 - O que poderia ser adicionado no projeto = "
+r4+" | 5 - Na sua opinião oque poderia ser adicionado de Novo no projeto = "
+r5;
}
