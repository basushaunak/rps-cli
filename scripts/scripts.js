let userChoice = -1;
let compChoice=-1;
const rpsArray = ["Rock", "Paper", "Scissors"];
document.addEventListener("click", userClick);
function computerPlay(){
    let compChoice=-1;
    compChoice = parseInt(Math.random()*3);
    return compChoice;
}
function userPlay(event){
    let item = event.target.id;
    let obj =document.querySelector("#"+item);        
    let imgArray = Array.from(document.querySelectorAll("img"));
    imgArray.forEach(image => {
        image.parentElement.classList.remove("selected");
    })
    obj.parentElement.classList.add("selected");    
    if(item === "img-rock"){
        userChoice = 0;
    }else if(item === "img-paper"){
        userChoice = 1;
    } else if(item === "img-scissors"){
        userChoice = 2;
    } 
}

function playRPS(){
/*    userChoice = userPlay(); */
    compChoice = computerPlay();
    let txtResult="";
    let imgComp = "./images/";
    let txtComp = "";
    let img1Src="./images/";
    let img2Src="./images/";
    let audioSrc = "";
    imgComp = imgComp + rpsArray[compChoice].toLowerCase()+ ".jpg" ;
    img1Src = img1Src+ rpsArray[compChoice].toLowerCase() + ".jpg";
    img2Src = img2Src+ rpsArray[userChoice].toLowerCase()+ ".jpg";
    document.querySelector("#computer-choice").src=imgComp ;
    document.querySelector("#compImg").src= img1Src;
    document.querySelector("#userImg").src= img2Src;
    document.querySelector(".computer").style.opacity=1;
    document.querySelector("#play-again").style.opacity=1;
    document.querySelector("#result-line2").textContent = "Because";
    txtComp = rpsArray[compChoice];
    if(userChoice == compChoice){
        document.querySelector("#snd-draw").currentTime = 0 ;
        document.querySelector("#snd-draw").play();
        document.querySelector("#result-line1").textContent = "Wow! Its a Draw!";
        document.querySelector("#result-text").textContent = "is same as";
    }else if(userChoice == 0){
        if(compChoice == 1){
            document.querySelector("#result-line1").textContent = "You lose!";
            document.querySelector("#snd-lose").currentTime=0;
            document.querySelector("#snd-lose").play();  
            document.querySelector("#result-text").textContent = "covers" ;
        }else { /* CompChoice == 2 */
            document.querySelector("#result-line1").textContent = "You won!";
            document.querySelector("#snd-win").currentTime = 0;
            document.querySelector("#snd-win").play();
            document.querySelector("#result-text").textContent = "is smashed by";
        }
    }else if(userChoice == 1){
        if(compChoice == 0){
            document.querySelector("#result-line1").textContent = "You won!";
            document.querySelector("#result-text").textContent = "is covered by" ;
            document.querySelector("#snd-win").currentTime = 0;
            document.querySelector("#snd-win").play();
        }else { /* compChoice == 2*/
            document.querySelector("#result-line1").textContent = "You lose!";
            document.querySelector("#result-text").textContent = "cuts";
            document.querySelector("#snd-lose").currentTime=0;
            document.querySelector("#snd-lose").play();
        }        
    }else if(userChoice == 2){
        if(compChoice == 0){
            document.querySelector("#result-line1").textContent = "You lose!";
            document.querySelector("#result-text").textContent = "smashes" ;
            document.querySelector("#snd-lose").currentTime=0;
            document.querySelector("#snd-lose").play();
        }else { /* compChoice == 1 */
            document.querySelector("#result-line1").textContent = "You won!";
            document.querySelector("#result-text").textContent = "is cut by";
            document.querySelector("#snd-win").currentTime = 0;
            document.querySelector("#snd-win").play();
        }
    }
   
}

function userClick(event){
    if(event.target.tagName === "IMG"){
        userPlay(event);
    }
    if(event.target.tagName === "BUTTON"){
        if(event.target.id == "btn-done" ){
            if(userChoice >= 0 && userChoice <= 2){
                document.querySelector("#btn-done").style.opacity=0;
                playRPS(event);
            }else {
                alert("Please make your selection first");
            }
        }else {
            resetPage();
        }
    }
}

function resetPage(){
    userChoice = -1;
    compChoice = -1; 
    document.querySelector(".computer").style.opacity=0;
    document.querySelector("#play-again").style.opacity=0;
    document.querySelector("#btn-done").style.opacity=1;
    document.querySelector("#computer-choice").src="" ;
    document.querySelector("#compImg").src= "";
    document.querySelector("#userImg").src= "";
    document.querySelector("#result-line1").textContent = "";
    document.querySelector("#result-line2").textContent = "";
    document.querySelector("#result-text").textContent = "";
    document.querySelector("#result-text").textContent = "";
    document.querySelector("#result-line1").textContent = "";
    let imgArray = Array.from(document.querySelectorAll("img"));
    imgArray.forEach(image => {
        image.parentElement.classList.remove("selected");
    })
    document.documentElement.scrollTop=0;
}