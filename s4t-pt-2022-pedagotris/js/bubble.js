// variables 

let first = document.getElementById('1');
let second = document.getElementById('2');
let third = document.getElementById('3');
let fourth = document.getElementById('4');
let fifth = document.getElementById('5');
let nextBtn = document.getElementById('nextBtn');
let playBtn = document.getElementById('playBtn');
let playBtnImg = document.getElementById('playBtnImg');
let resetBtn = document.getElementById('resetBtn');
let count = 1;
let burgerMenu = document.getElementById('burger-menu');
let sideBar = document.getElementById('sideBar');
let counter = 1;
let selector = document.getElementById('selector');
let selector2 = document.getElementById('selector2');
let randomSelector = document.getElementById('randomSelector');
let firstFor = document.getElementById('firstFor');
let secondFor = document.getElementById('secondFor');
let ifCondition = document.getElementById("ifCondition");
let firstFor2 = document.getElementById('firstFor2');
let secondFor2 = document.getElementById('secondFor2');
let ifCondition2 = document.getElementById("ifCondition2");
let javaC = document.getElementById("javaCode");
let cCode = document.getElementById("c#Code");
let container = document.getElementById("container");
let inputVal =document.getElementById("inputVal");
let value = 0;
let commaError = document.getElementById("commaError");
let charError = document.getElementById("charError");
let state = true;
let check = false;
let checkCpt = 0;
let sorted = false;
let explanationText = document.getElementById("explanationText");
let inputValArr = [];
let inputValArrInt = [];
let boolStep = false;
let stepByStep = false;



function random(){
  for(let i=0;i<randomSelector.value;i++){
    inputValArr.push(Math.floor(Math.random()*99));
    inputValArrInt.push(Math.floor(Math.random()*99));
  }
  console.log(inputValArr);
  console.log(inputValArrInt);
}

function mode(){
  if(selector.value === "Temps réel" || selector.value === "x2"){
    playBtn.style.display = "block";
    nextBtn.style.display = "none";
  }else{
    nextBtn.style.display = "block";
    stepByStep = true;
  }
}


nextBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  boolStep = true;
  check = true;
  checkCpt = 0;


    bblSort(inputValArrInt);
    //check length of input values

})



function code(){
  if(selector2.value === "Java"){
    javaC.style.opacity = 100 + "%";
    cCode.style.opacity = 0 + "%";
  }else{
    javaC.style.opacity = 0 + "%";
    cCode.style.opacity = 100 + "%";
  }
}


// button to go to the next step 
playBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  check = true;
  checkCpt = 0;

  stepByStep ? playBtn.style.display = "none" : playBtn.style.display = "block";

  while(container.childElementCount > 0){
      container.removeChild(container.firstChild);
  }

  if(inputVal.value!==""){
    inputVal.value.includes(" ") ? (commaError.style.display = "block", state=false) : (commaError.style.display = "none", state=true);
    inputValArr = inputVal.value.split(/,/);
    inputValArrInt = inputValArr.map(e => parseInt(e));
  }

  //checking if inputText contains a NaN value
  for(let i=0;i<inputValArrInt.length;i++){
    if(isNaN(inputValArrInt[i])){
      charError.style.display = "block";
      state=false;
      check=false;
      checkCpt += 1;
    }
  }

  if(checkCpt===0){
    charError.style.display = "none";
  }


  if(state===true && check===true && container.childElementCount===0){
    for(let i=0; i<inputValArr.length;i++){
      console.log(inputValArr.length);
      let element = document.createElement('div');
      element.style.height = 50 + "px";
      element.style.width = 60 +"px";
      element.style.borderRadius = 12 + "px";
      element.style.backgroundColor = "skyblue";
      element.style.position = "absolute";
      element.style.justifyContent = "center";
      element.style.alignItems = "center";
      element.style.color = "white";
      element.style.fontSize = 30 + "px";
      element.style.transitionDuration = (selector.value === "x2" ? 0.4 + "s" : 1 + "s");
      element.style.paddingTop = 0.2 + "rem";
      element.style.paddingLeft = 0.8 + "rem";
      element.innerHTML = inputValArrInt[i];
      container.appendChild(element);
      value = 0;
    }
    bblSort(inputValArrInt);
    //check length of input values
    if(container.childElementCount>10){
      value=0;
    }
    else{
      value=300;
    }
    pushArr();
  }

})


function pushArr(){
  for(let i=0; i<container.childElementCount; i++){
      value += 70;
      container.children[i].style.left = value + "px";
      explanationText.style.left = container.children[0].style.left
  }
}

function waitforme(ms){
  return new Promise(resolve => {setTimeout(resolve, ms)});
}

function waitFor(){

  if(boolStep===false){
    waitFor();
  }
  else{
    return;
  }

}

async function bblSort(arr){
  for(var i = 0; i < arr.length; i++){
    await waitforme(selector.value === "x2" ? 300 : 1000);
    ifCondition.style.backgroundColor = "";
    ifCondition.style.color = "";
    ifCondition2.style.backgroundColor = "";
    secondFor.style.backgroundColor = "";
    secondFor2.style.backgroundColor = "";
    secondFor.style.color = "";
    firstFor.style.backgroundColor = "yellow";
    firstFor.style.color = "blue";
    firstFor2.style.backgroundColor = "yellow";

    // Last i elements are already in place
    for(var j = 0; j < ( arr.length - i -1 ); j++){
      await waitforme(selector.value === "x2" ? 300 : 1000);
      firstFor.style.color = "";
      firstFor.style.backgroundColor = "";
      firstFor2.style.backgroundColor = "";
      ifCondition.style.backgroundColor = "";
      ifCondition.style.color = "";
      ifCondition2.style.backgroundColor = "";
      secondFor.style.backgroundColor = "yellow";
      secondFor.style.color = "blue";
      secondFor2.style.backgroundColor = "yellow";


      // Checking if the item at present iteration
      container.children[j].style.backgroundColor = "red";
      container.children[j+1].style.backgroundColor = "red";
      await waitforme(selector.value === "x2" ? 100 : 500);
      container.children[j].style.backgroundColor = "skyblue";
      container.children[j+1].style.backgroundColor = "skyblue";
      // is greater than the next iteration
      explanationText.innerHTML =  arr[j].toString() + " est supérieur à " + arr[j+1].toString() + " ?";
      if(arr[j] > arr[j+1]){
        await waitforme(selector.value === "x2" ? 300 : 1000);
        secondFor.style.backgroundColor = "";
        secondFor.style.color = "";
        secondFor2.style.backgroundColor = "";
        ifCondition.style.backgroundColor = "yellow";
        ifCondition.style.color = "blue";
        ifCondition2.style.backgroundColor = "yellow";


        // If the condition is true then swap them
        console.log("swap them");
        explanationText.innerHTML = "oui, donc échange de " + arr[j].toString() + " avec " + arr[j+1].toString();
        var temp = arr[j]
        let temp2 = container.children[j].style.left;
        arr[j] = arr[j + 1]
        container.children[j].style.backgroundColor = "green";
        container.children[j+1].style.backgroundColor = "green";
        container.children[j].style.left = container.children[j+1].style.left;
        arr[j+1] = temp
        container.children[j+1].style.left = temp2;
        await waitforme(selector.value === "x2" ? 300 : 1000);
        swap(container.children[j], container.children[j+1]);
        boolStep = false;
        container.children[j].style.backgroundColor = "skyblue";
        container.children[j+1].style.backgroundColor = "skyblue";
        if(selector.value === "Pas à pas"){
          waitFor();
        }
      }
    }
  }
  // Array sorted
  firstFor.style.backgroundColor = "";
  firstFor.style.color = "";
  firstFor2.style.backgroundColor = "";
  secondFor.style.backgroundColor = "";
  secondFor2.style.backgroundColor = "";
  ifCondition.style.backgroundColor = "";
  ifCondition2.style.backgroundColor = "";


  sorted = true;
  playBtnImg.src = "./images/restartLogo.png";
  explanationText.innerHTML = "Félicitation, votre tableau est trié!"
}

function swap(node1, node2) {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
}


// button to set everything back to their position

// sidebar with animation 

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


// button to chose the programming language



// button to chose the speed 

