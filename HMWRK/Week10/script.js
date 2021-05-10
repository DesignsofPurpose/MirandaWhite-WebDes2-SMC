
let header = document.getElementById("myHeader");
let BlackHairImg = document.getElementById("BlackHairImg");
let clrBTN = document.getElementById("colorBTN");
let tgglBTN = document.getElementById("toggleBTN");

function changeTheColor() {
    // DO SOME COLOR CHANGING HERE
    let redComp = Math.random() * 255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random() * 255;
    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
}

let toggleTheImage = function () {
    // WE'LL DO SOME IMAGE TOGGLING HERE

    if (tgglBTN.innerText === "Show the second one!") {
        console.log("show the second image");
        BlackHairImg.src = "https://images.pexels.com/photos/2171133/pexels-photo-2171133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        tgglBTN.innerText = "Show the third one!";
        return;
    }
    if (tgglBTN.innerText === "Show the third one!") {
        console.log("show the third image");
        BlackHairImg.src = "https://images.pexels.com/photos/2528333/pexels-photo-2528333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        tgglBTN.innerText = "Show the fourth one!";
        return;
    }
    if (tgglBTN.innerText === "Show the fourth one!") {
        console.log("show the fourth image");
        BlackHairImg.src = "https://images.pexels.com/photos/2437835/pexels-photo-2437835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        tgglBTN.innerText = "Show the first one!";
        return;
    }
    if (tgglBTN.innerText === "Show the first one!") {
        console.log("show the first image");
        BlackHairImg.src = "Img1.jpg";
        tgglBTN.innerText = "Show the second one!";
        return;
    }
}

changeTheColor();

clrBTN.addEventListener("click", changeTheColor);
tgglBTN.addEventListener("click", toggleTheImage);
