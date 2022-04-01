let douze = document.getElementById('12');
let trentequatre = document.getElementById('34');
let cinquantequatre = document.getElementById('54');
let deux = document.getElementById('2');
let trois = document.getElementById('3');
let nextBtn = document.getElementById('nextBtn');
let playBtn = document.getElementById('playBtn');
let resetBtn = document.getElementById('resetBtn');
let step = document.getElementById('step');
let count = 1;
let burgerMenu = document.getElementById('burger-menu');
let sideBar = document.getElementById('sideBar');
let counter = 1;
let selector = document.getElementById('selector');
let selector2 = document.getElementById('selector2');
let selector3 = document.getElementById('selector3');
let selectValue;
let selectValue2;
let selectValue3;
let submitBtn = document.getElementById('submitBtn');
let submitBtn2 = document.getElementById('submitBtn2');
let submitBtn3 = document.getElementById('submitBtn3');
let firstFor = document.getElementById('firstFor');
let secondFor = document.getElementById('secondFor');
let ifCondition = document.getElementById("ifCondition");
let firstFor2 = document.getElementById('firstFor2');
let secondFor2 = document.getElementById('secondFor2');
let javaC = document.getElementById("javaCode");
let cCode = document.getElementById("c#Code");
let explanationText = document.getElementById("explanation");
let speed1 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
let speed2 = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500];
let x2 = false;


function mode(){
    if(selector.value === "x2"){
        x2 = true;
        console.log(x2);
    }else{
        x2 = false;
    }
}


function code(){
    if(selector2.value === "Java"){
        javaC.style.opacity = 100 + "%";
        cCode.style.opacity = 0 + "%";
    }else{
        javaC.style.opacity = 0 + "%";
        cCode.style.opacity = 100 + "%";
    }
}

resetBtn.addEventListener('click',()=>{
    douze.style.left = 20 + "vw";
    deux.style.left = 50 + "vw";
    cinquantequatre.style.left = 40 + "vw";
    trentequatre.style.left = 30 + "vw";
    trois.style.left = 60 + "vw";
})

playBtn.addEventListener('click', () => {

  setTimeout(()=>{
      cinquantequatre.style.top = 54 + "vh";
      cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
      explanationText.style.display = "block";
      explanationText.innerHTML = "On sélectionne la valeur médiane et un par un on vérifie les valeurs à droite de celle-ci en les plaçant correctement";
  }, x2===true ? 500 : 1000)

    setTimeout(()=>{
        cinquantequatre.style.top = 35 + "vh";
        cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
    },x2===true ? 1500 : 3000)


    setTimeout(()=>{
        deux.style.top = 54 + "vh";
        deux.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[3-2] = 34 et on les échange"
    },x2===true ? 2500 : 5000)

    setTimeout(()=>{
        trentequatre.style.top = 54 + "vh";
        trentequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[3-2] = 34 et on les échange"

    },x2===true ? 3500 : 7000)

    setTimeout(()=>{
        trentequatre.style.left = 50 + "vw";
        trentequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[3-2] = 34 et on les échange"

    },x2===true ? 8000/2 : 8000)

    setTimeout(()=>{
        trentequatre.style.top = 35 + "vh";
        trentequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[3-2] = 34 et on les échange"

    },x2===true ? 9000/2 : 9000)

    setTimeout(()=>{
        deux.style.left = 30 + "vw";
        deux.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[3-2] = 34 et on les échange"

    },x2===true ? 10000/2 : 10000)

    setTimeout(()=>{
        deux.style.top = 35 + "vh";
        deux.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[3-2] = 34 et on les échange"

    },x2===true ? 11000/2 : 11000)

    setTimeout(()=>{
        trois.style.top = 50 + "vh";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[4-2] = 54 et on les échange"

    },x2===true ? 11000/2 : 11000)

    setTimeout(()=>{
        cinquantequatre.style.top = 50 + "vh";
        cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[4-2] = 54 et on les échange"

    },x2===true ? 12000/2 : 12000)

    setTimeout(()=>{
        cinquantequatre.style.left = 60 + "vw";
        cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[4-2] = 54 et on les échange"

    },x2===true ? 13000/2 : 13000)

    setTimeout(()=>{
        cinquantequatre.style.top = 35 + "vh";
        cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[4-2] = 54 et on les échange"

    },x2===true ? 14000/2 : 14000)

    setTimeout(()=>{
        trois.style.left = 40 + "vw";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[4-2] = 54 et on les échange"

    },x2===true ? 15000/2 : 15000)

    setTimeout(()=>{
        douze.style.top = 50 + "vh";
        douze.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[1] = 12 et on les échange"

    },x2===true ? 16000/2 : 16000)

    setTimeout(()=>{
        douze.style.left = 40 + "vw";
        douze.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[1] = 12 et on les échange"

    },x2===true ? 17000/2 : 17000)

    setTimeout(()=>{
        douze.style.top = 35 + "vh";
        douze.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[1] = 12 et on les échange"

    },x2===true ? 18000/2 : 18000)

    setTimeout(()=>{
        trois.style.left = 20 + "vw";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[1] = 12 et on les échange"

    },x2===true ? 19000/2 : 19000)

    setTimeout(()=>{
        trois.style.top = 35 + "vh";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 3 avec arr[1] = 12 et on les échange"

    },x2===true ? 20000/2 : 20000)

    setTimeout(()=>{
        deux.style.top = 50 + "vh";
        deux.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[1]=3 et on les échange"
    },x2===true ? 21000/2 : 21000)

    setTimeout(()=>{
        trois.style.top = 50 + "vh";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[1]=3 et on les échange"

    },x2===true ? 22000/2 : 22000)

    setTimeout(()=>{
        trois.style.left = 30 + "vw";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[1]=3 et on les échange"

    },x2===true ? 23000/2 : 23000)

    setTimeout(()=>{
        trois.style.top = 35 + "vh";
        trois.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[1]=3 et on les échange"

    },x2===true ? 24000/2 : 24000)

    setTimeout(()=>{
        deux.style.left = 20 + "vw";
        deux.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[1]=3 et on les échange"

    },x2===true ? 25000/2 : 25000)

    setTimeout(()=>{
        deux.style.top = 35 + "vh";
        deux.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "On compare 2 avec arr[1]=3 et on les échange";

    },x2===true ? 26000/2 : 26000)

    setTimeout(()=>{
        douze.style.top = 50 + "vh";
        douze.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "12 est dans la bonne position donc on ne touche pas";

    },x2===true ? 27000/2 : 27000)

    setTimeout(()=>{
        douze.style.top = 35 + "vh";
        douze.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "12 est dans la bonne position donc on ne touche pas";

    },x2===true ? 28000/2 : 28000)

    setTimeout(()=>{
        trentequatre.style.top = 50 + "vh";
        trentequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "34 est dans la bonne position donc on ne touche pas";

    },x2===true ? 29000/2 : 29000)

    setTimeout(()=>{
        trentequatre.style.top = 35 + "vh";
        trentequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "34 est dans la bonne position donc on ne touche pas";

    },x2===true ? 30000/2 : 30000)

    setTimeout(()=>{
        cinquantequatre.style.top = 50 + "vh";
        cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "54 est dans la bonne position donc on ne touche pas";

    },x2===true ? 31000/2 : 31000)

    setTimeout(()=>{
        cinquantequatre.style.top = 35 + "vh";
        cinquantequatre.style.transitionDuration = x2===true ? 0.75 + "s" : 1.5 + "s";
        explanationText.innerHTML = "54 est dans la bonne position donc on ne touche pas";
    },x2===true ? 32000/2 : 32000)

    setTimeout(()=>{
        explanationText.innerHTML = "Maintenant le tri est arrêté et le tableau est trié!";
    },x2===true ? 33000/2 : 33000)


})

resetBtn.addEventListener('click', () => {

    count = 1;

    fifth.style.left = 60 + "vw";
    fourth.style.left = 40 + "vw";
    fifth.style.transitionDuration = 1 + "s";
    fourth.style.transitionDuration = 1 + "s";

    setTimeout(()=>{
        fifth.style.left = 50 + "vw";
        third.style.left = 60 + "vw";
        fifth.style.transitionDuration = 1 + "s";
        third.style.transitionDuration = 1 + "s";
    },1000)


    setTimeout(()=>{
        second.style.left = 30 + "vw";
        first.style.left = 70 + "vw";
        second.style.transitionDuration = 1 + "s";
        first.style.transitionDuration = 1 + "s";
    },2000)


})

burgerMenu.addEventListener('click', () => {
    counter++;
    if(counter%2===0){
        sideBar.style.transitionDuration = 500 + "ms";
        sideBar.style.left = 0 + "vw";
    } else{
        sideBar.style.transitionDuration = 1 + "s";
        sideBar.style.left = -20 + "vw";
    }
})

submitBtn.addEventListener('click', (e)=>{

    e.preventDefault();

    if(selector.value === "Temps réel"){
        playBtn.style.display = "block";
        nextBtn.style.display = "none";
    }else{
        playBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
})


submitBtn2.addEventListener('click', (e)=>{

    e.preventDefault();

    if(selector2.value === "Java"){
        javaC.style.opacity = 100 + "%";
        cCode.style.opacity = 0 + "%";
    }else{
        javaC.style.opacity = 0 + "%";
        cCode.style.opacity = 100 + "%";
    }
})

submitBtn3.addEventListener('click', (e)=>{

    e.preventDefault();

})