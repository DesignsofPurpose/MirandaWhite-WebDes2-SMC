let header = document.getElementById("myHeader");
let displayIMG = document.getElementById("displayIMG")
let clrBTN = document.getElementById("colorBTN");
let tgglBTN = document.getElementById("toggleBTN");


  function changeTheColor(){
    // COLOR CHANGING METHOD //
    let redComp = Math.random() * 255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random() * 255;
    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb("+ redComp + ", "+ greenComp +", " + blueComp + ")";
  }

// TOGGLE IMAGE METHOD //
let toggleTheImage = function(){

  if (toggleBTN.innerText === "Show the second one!") {
      console.log("Show the second image.");
      displayIMG.src = "pexels-lisa-3616590.jpg";
      toggleBTN.innerText = "Now show the third one!";return;
  }
  if(toggleBTN.innerText === "Show the third image.") {
    console.log("Show the third image.");
    displayIMG.src = "pexels-matheus-bertelli-4085685.jpg";
    toggleBTN.innerText = "Now show the fourth one!";return;
  }
  if(toggleBTN.innerText === "Show the fourth one!") {
  console.log("Show the fourth image");
  displayIMG.src = "pexels-lisa-2846828.jpg";
  toggleBTN.innerText = "Now show the first one!";return;
  }
  if(toggleBTN.innerText === "Show the first one!") {
    console.log("Show the first image");
    displayIMG.src = "pexels-lisa-3586766.jpg";
    toggleBTN.innerText = "Now show the second one!";return;
    }




  // else {
      // console.log("show the first image");
      // sisters.src = "pexels-lisa-2846828.jpg";
      // tgglBTN.innerText = "Show the second one!";
  }
}

changeTheColor();

clrBTN.addEventListener("click", changeTheColor);
tgglBTN.addEventListener("click", toggleTheImage);