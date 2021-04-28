let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");
let CuteLion = document.getElementById("CuteLion");
let tggleBTN = document.getElementById("toggleBTN")

function changeTheColor (){
    // we will do some color changing here

    let redComp = Math.random() *255;
    console.log(redComp);
    let greenComp = Math.random() * 255;
    let blueComp = Math.random() * 255;
    console.log ("RED:" + redComp);
    console.log ("GREEN:" + greenComp);
    console.log ("BLUE:" + blueComp);

    header.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
}
let toggleTheImage = function(){
    // We will do some IMG toggling Here
    CuteLion.scr = "https://images.pexels.com/photos/41176/africa-animal-big-brown-41176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    tggleBTN.innerText + "Now show the first one!";
    
    if(CuteLion.src === "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"){
        console.log("show the second one")
        // if it's true
    }
    else {
        console.log("show the first one")
        // if it's false
    }
}
changeTheColor();

clrBTN.addEventListener("click", changeTheColor);
tggleBTN.addEventListener("click", toggleTheImage);