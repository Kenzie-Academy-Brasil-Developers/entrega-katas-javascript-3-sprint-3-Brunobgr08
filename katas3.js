const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(result, numKata){
    // Show Results Katas
    let containerKata = document.createElement("Div");
    containerKata.className = "containerKata";

    let newResultTitle = document.createElement("h2");
    newResultTitle.className = "resultTitle";
    newResultTitle.innerText = "Kata " + numKata + ". Resultado:"

    containerKata.appendChild(newResultTitle);

    let newResultItem = document.createElement("p");
    newResultItem.className = "resultItem";

    let textResultItem = document.createTextNode(result.join(', '));
    newResultItem.appendChild(textResultItem);

    containerKata.appendChild(newResultItem);

    const destino = document.getElementById("exibeResultados");
    destino.appendChild(containerKata);

    }


// INICIO KATA 01

function kata1() {

    let arrayResult = [];
    for (let i = 1; i <=25; i++){
        arrayResult.push(i);
    }
    showResults(arrayResult, 1);

    return arrayResult;
}
    kata1();

// FIM KATA 01

//INICIO KATA 02

function kata2() {

    let arrayResult = [];
    for (let i = 25; i >= 1; i--){
        arrayResult.push(i);
    }

    showResults(arrayResult, 2);

    return arrayResult;
}
    kata2();

//FIM KATA 02

//INICIO KATA 03

function kata3() {

    let arrayResult = [];
    for (let i = -1; i >= -25; i--){
        arrayResult.push(i);
    }

    showResults(arrayResult, 3);

    return arrayResult;
}
    kata3();

//FIM KATA 03

//INICIO KATA 04

function kata4() {

    let arrayResult = [];
    for (let i = -25; i <= -1; i++){
        arrayResult.push(i);
    }

    showResults(arrayResult, 4);

    return arrayResult;
}
    kata4();

//FIM KATA 04

//INICIO KATA 05

function kata5() {

    let arrayResult = [];
    for (let i = 25; i >=-25; i-=2){
        arrayResult.push(i);
    }

    showResults(arrayResult, 5);

    return arrayResult;
}
    kata5();

//FIM KATA 05

// INICIO KATA 06

function kata6() {

    let arrayResult = [];
    for (let i = 1; i <=100; i++){
        if (i % 3 === 0){
            arrayResult.push(i);
        }
    }

    showResults(arrayResult, 6);

    return arrayResult;
}
    kata6();

//FIM KATA 06

//INICIO KATA 07

function kata7() {

    let arrayResult = [];
    for (let i = 1; i <=100; i++){
        if ( i % 7 === 0 ){
            arrayResult.push(i);
        }
    }

    showResults(arrayResult, 7);

    return arrayResult;
}
    kata7();

//FIM KATA 07

//INICIO KATA 08

function kata8() {

    let arrayResult = [];
    for (let i = 100; i >= 1; i--){
        if ( i % 7 === 0 || i % 3 === 0 ){
            arrayResult.push(i);
        }
    }

    showResults(arrayResult, 8);

    return arrayResult;
}
    kata8();

//FIM KATA 08

//INICIO KATA 09

function kata9() {

    let arrayResult = [];
    for (let i = 1; i <= 100; i++){
        if ( i % 2 !== 0 && i % 5 === 0 ){
            arrayResult.push(i);
        }
    }

    showResults(arrayResult, 9);

    return arrayResult;
}
    kata9();

//FIM KATA 09

//INICIO KATA 10

function kata10() {

    showResults(sampleArray, 10);

    return sampleArray;
}
    kata10();

//FIM KATA 10

//INICIO KATA 11

function kata11() {

    let arrayResult = [];
    for (let i = 0; i <= sampleArray.length-1; i++){
        if ( sampleArray[i] % 2 === 0 ){
            arrayResult.push(sampleArray[i]);
        }
    }

    showResults(arrayResult, 11);

    return arrayResult;
}
    kata11();

//FIM KATA 11

//INICIO KATA 12

function kata12() {

    let arrayResult = [];
    for (let i = 0; i <= sampleArray.length-1; i++){
        if ( sampleArray[i] % 2 !== 0 ){
            arrayResult.push(sampleArray[i]);
        }
    }

    showResults(arrayResult, 12);

    return arrayResult;
}
    kata12();

//FIM KATA 12

//INICIO KATA 13

function kata13() {

    let arrayResult = [];
    for (let i = 0; i <= sampleArray.length-1; i++){
        if ( sampleArray[i] % 8 === 0 ){
            arrayResult.push(sampleArray[i]);
        }
    }

    showResults(arrayResult, 13);

    return arrayResult;
}
    kata13();

//FIM KATA 13

//INICIO KATA 14

function kata14() {

    let arrayResult = [];
    for (let i = 0; i <= sampleArray.length-1; i++){
        arrayResult.push(sampleArray[i]*sampleArray[i]);
    }

    showResults(arrayResult, 14);

    return arrayResult;
}
    kata14();

//FIM KATA 14

//INICIO KATA 15

function kata15() {

    let arrayResult = [];
    let aux = 0;
    for (let i = 1; i <= 20; i++){
        aux += i;
    }
    arrayResult.push(aux);

    showResults(arrayResult, 15);

    return arrayResult;
}
    kata15();

//FIM KATA 15

//INICIO KATA 16

function kata16() {

    let arrayResult = [];
    let aux = 0;
    for (let i = 0; i <= sampleArray.length-1; i++){
        aux += sampleArray[i];
    }
    arrayResult.push(aux);

    showResults(arrayResult, 16);

    return arrayResult;
}
    kata16();

//FIM KATA 16

//INICIO KATA 17

function kata17() {

    let arrayResult = [];
    let menor = 0;
    for(let i = 0; i <= sampleArray.length-1; i++){
        menor = sampleArray[i];
        for (let j = 0; j <= sampleArray.length-1; j++){
            if (menor > sampleArray[j]){
                menor = sampleArray[j];
            }
        }
    }
    arrayResult.push(menor);

    showResults(arrayResult, 17);

    return arrayResult;
}
    kata17();

//FIM KATA 17

//INICIO KATA 18

function kata18() {

    let arrayResult = [];
    let maior = 0;
    for(let i = 0; i <= sampleArray.length-1; i++){
        maior = sampleArray[i];
        for (let j = 0; j <= sampleArray.length-1; j++){
            if (maior < sampleArray[j]){
                maior = sampleArray[j];
            }
        }
    }
    arrayResult.push(maior);

    showResults(arrayResult, 18);

    return arrayResult;
}
    kata18();

//FIM KATA 18

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */


const sampleBlock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let containerKataBonus;
let compri = 100;

function showBlocks(kataB, numKataBonus) {
    // ShowBlocks katas Bonus
    containerKataBonus = document.createElement("Div");
    containerKataBonus.className = "containerKataBonus";

    let newBlockTitle = document.createElement("h2");
    newBlockTitle.className = "resultTitle";
    newBlockTitle.innerText = "Kata Bônus " + numKataBonus + ". Resultado:"

    containerKataBonus.appendChild(newBlockTitle);

    let newBlock = sampleBlock.map(kataB);

    const destino = document.getElementById("exibeResultados");
    destino.appendChild(containerKataBonus);

}

function kataBonus1(elemento){
    //  kata bonus 1
    let newBlockItem = document.createElement("span");
        newBlockItem.className = "blockItem";
        newBlockItem.innerText = elemento;

        containerKataBonus.appendChild(newBlockItem);
}
    showBlocks(kataBonus1, 1);

function kataBonus2(elemento) {
    //  kata bonus 2
        compri +=5;

        let newBlockItem = document.createElement("span");
        newBlockItem.className = "blockItem";
        newBlockItem.style.width += compri+"px";
        newBlockItem.innerText = elemento;

        containerKataBonus.appendChild(newBlockItem);
}
    showBlocks(kataBonus2, 2);

function kataBonus3(elemento) {
    //  kata bonus 3
    let newBlockItem = document.createElement("span");
    newBlockItem.className = "blockItem";
    newBlockItem.style.width = sampleArray[elemento-1]+"px";
    newBlockItem.innerText = elemento;

    containerKataBonus.appendChild(newBlockItem);
}
    showBlocks(kataBonus3, 3);

function kataBonus4(elemento) {
    //  kata bonus 4
    let newBlockItem = document.createElement("span");
    newBlockItem.className = "blockItem";
    newBlockItem.style.width = sampleArray[elemento-1]+"px";
    if (elemento % 2 === 0){
        newBlockItem.style.backgroundColor = "red";
    }

    newBlockItem.innerText = elemento;

    containerKataBonus.appendChild(newBlockItem);
}
    showBlocks(kataBonus4, 4);

function kataBonus5(elemento) {
    //  kata bonus 5
    let newBlockItem = document.createElement("span");
    newBlockItem.className = "blockItem";
    newBlockItem.style.width = sampleArray[elemento-1]+"px";
    if (sampleArray[elemento-1] % 2 === 0){
        newBlockItem.style.backgroundColor = "red";
    }
    newBlockItem.innerText = elemento;

    containerKataBonus.appendChild(newBlockItem);
}
    showBlocks(kataBonus5, 5);
