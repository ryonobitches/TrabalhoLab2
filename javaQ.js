var r1,r2,r3,r4,r5

// Pergunta 1 (Algoritmo)



function a1() {
    r1 = "1 - Paredes: a) Papelão";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}


function b1() {
    r1 = "1 - Paredes: b) Isopor";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}


function c1() {
    r1 = "1 - Paredes: c) Tiijolos";
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("pergunta1").style.display = "none";
    console.log(r1)
}

function e1() {
    if (document.getElementById("resp1input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r1 = "1 - Paredes: resposta aberta = "+document.getElementById("resp1input").value;
    document.getElementById("pergunta2").style.display = "block";
    document.getElementById("suresp1").style.display = "none";
    console.log(r1)
    }
}

function d1() {
    r1 = "1 - Paredes: d) Caixas de Papelão";
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
    r2 = ", 2 - Piso: a) Piso de Bamboo";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}


function b2() {
    r2 = ", 2 - Piso: b) Caixa de leites reciclavéis";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}


function c2() {
    r2 = ", 2 - Piso: c) Papelão";
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("pergunta2").style.display = "none";
    console.log(r2)
}

function e2() {
    if (document.getElementById("resp2input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r2 =", 2 - Piso: resposta livre = "+document.getElementById("resp2input").value;
    document.getElementById("pergunta3").style.display = "block";
    document.getElementById("suresp2").style.display = "none";
    console.log(r2)
    }
}

function d2() {
    r2 = ", 2 - Piso: d) nenhum piso";
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
    r3 = ", 3 - Mobilia que gostaria de ver no projeto: a) Cadeiras";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}


function b3() {
    r3 = ", 3 -Mobilia que gostaria de ver no projeto: b) Mesa de Jantar";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}


function c3() {
    r3 = "3 - Mobilia que gostaria de ver no projeto: c) Prateleiras";
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("pergunta3").style.display = "none";
    console.log(r3)
}

function e3() {
    if (document.getElementById("resp3input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r3 = (", 3 - Mobilia que gostaria de ver no projeto: resposta livre = ")
    +document.getElementById("resp3input").value;
    document.getElementById("pergunta4").style.display = "block";
    document.getElementById("suresp3").style.display = "none";
    console.log(r1)
    }
}

function d3() {
    r3 = ", 3 - Mobilia que gostaria de ver no projeto: d) armarios";
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
    r4 = ", 4 - oque poderia ser adicionado no projeto: a) + moveis";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}


function b4() {
    r4 = ", 4 - oque poderia ser adicionado no projeto: b) + comodos";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}


function c4() {
    r4 = ", 4 - oque poderia ser adicionado no projeto: c) + moveis Divulgação ( panfletos etc ) ";
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("pergunta4").style.display = "none";
    console.log(r4)
}

function e4() {
    if (document.getElementById("resp4input").value == ""){
        alert('Campo de resposta livre não pode estar vazio!')
    }else {
    r4 =", 4 - oque poderia ser adicionado no projeto: resposta livre = "+
    document.getElementById("resp4input").value;
    document.getElementById("suresp5").style.display = "flex";
    document.getElementById("suresp4").style.display = "none";
    console.log(r4)
    }
}

function d4() {
    r4 = ", 4 - oque poderia ser adicionado no projeto: d) + tecnologia (videos etc)";
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
    r5 ="5 - oque poderia ser adicionado no projeto = "+
    document.getElementById("resp5input").value;
    document.getElementById("terminal6").style.display = "block";
    document.getElementById("suresp5").style.display = "none";
    console.log(r5)
    }
document.getElementById("mensagem").innerHTML = r1+r2+r3+r4+r5
}
