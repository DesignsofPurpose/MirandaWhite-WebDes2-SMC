let changeSlide = function(){
    console.log("something");
}
    let carousel = document.getElementById("carousel");
    let carouselIMG = document.getElementById("carouselIMG");

    let images = [
        "../collections_loops_timers/quokkas1.jpg",
        "../collections_loops_timers/quokkas2.jpg",
        "../collections_loops_timers/quokkas3.jpg"
    ]
    let counter = 0;


    let imgChange = function(){
        counter++;
        if(counter === 3) {counter = 0}
        carouselIMG.src = images[counter];

        // METHOD 2:
        // if(carouselIMG.alt === "qute quokka 1"){
        //     carouselIMG.src = images[1];
        //     carouselIMG.alt = "qute quokka 2";
        // }
        // else if(carouselIMG.alt === "qute quokka 2"){
        //     carouselIMG.src = images[2];
        //     carouselIMG.alt = "qute quokka 3";
        // }
        // else if(carouselIMG.alt === "qute quokka 3"){
        //     carouselIMG.src = images[0];
        //     carouselIMG.alt = "qute quokka 1";
        // }
    }

    let subscribeRequest = function(){
        prompt("Give us your email or else!!!", "my@email.com");
    }

    window.addEventListener("load", function(){
        setTimeout(function(){
            prompt("SUBSCRIBE TO OUR NEWSLETTER!!!","MYEMAIL.CI)
        })       
            //")   subscribeRequest}, 5000); setInterval(imgChange, 3000);
    

    