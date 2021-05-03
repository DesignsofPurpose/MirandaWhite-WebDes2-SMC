let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");

function changeTheColor (){
    // we will do some color changing here
    let redComp = Math.random() *255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random() * 255;
    console.log ("RED:" + redComp);
    console.log ("GREEN:" + greenComp);
    console.log ("BLUE:" + blueComp);

    header.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
}
clrBTN.addEventListener("click", changeTheColor);
changeTheColor();




let CuteLion = document.getElementById("quokkaImg");
let tggleBTN = document.getElementById("toggleBTN");

let toggleTheImage = function(){
    // We will do some IMG toggling Here
    
    
    
    if(tggleBTN.innerText === "Next Picture"){
        quokkaImg.scr = "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        tggleBTN.innerText = "Now show the first one!";
        console.log("show the second one");
        // if it's true
    }
    else {
        // if it's false
        quokkaImg.src = "pexels-gary-whyte-730539.jpg";
        tggleBTN.innerText= "Next Picture";
        console.log("show the first one");
    }

}

tggleBTN.addEventListener("click", toggleTheImage);


  