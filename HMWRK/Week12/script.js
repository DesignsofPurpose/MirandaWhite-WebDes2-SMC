var groupSelect = document.getElementById("groupSelect");
        var catSelect = document.getElementById("catSelect");
        var galleryImg = document.getElementById("galleryImg");

        var merchMpwr = ["MPWR T-shirts", "MPWR Lunch Boxes"];
        var deskMpwr = ["File Folders", "Calendars", "Journals"];
        var wallArt = ["DOP Prints", "Typeface Prints"];

        var imageCounter = 1;

        groupSelect.addEventListener("change", function () {
            console.log(groupSelect.value);

            if (groupSelect.value == 'merchMpwr') {
                fillCategory(merchMpwr);
            }
            else if (groupSelect.value == 'deskMpwr') {
                fillCategory(deskMpwr);
            }
            else if (groupSelect.value == 'wallArt') {
                fillCategory(wallArt);
            }
            else {
                //for all other cases
                catSelect.innerHTML = "";
            }
        })

        var fillCategory = function (catArray) {
            catSelect.innerHTML = "";
            catArray.forEach(function (member) {
                var opt = document.createElement('option');
                opt.value = member.toLowerCase();
                opt.textContent = member;
                catSelect.appendChild(opt);
            })
        }

        var timerFunction = function () {
            if (imageCounter == 1) {
                galleryImg.src = "PhenomWoman.png";
                imageCounter = 2;
            }
            else if (imageCounter == 2) {
                galleryImg.src = "WomenUp.jpg";
                imageCounter = 3;
            }
            else if (imageCounter == 3) {
                galleryImg.src = "GirlPower.jpg";
                imageCounter = 1;
            }

        }

        let subscribeRequest = function () {
            prompt("Subscribe to Newsletter Now to recieve Updates on Exclusive Merch and Discounts", "What's your email?");
        }

        window.addEventListener("load", function () {
            setTimeout(subscribeRequest, 4000);
            setInterval(imgChange, 3000);
        })

        window.setInterval(timerFunction, 4000);

    























        // $("#hideImg1").click(function(){
        //     $("#img1 img").fadeToggle();
        //  });
    
        //  $("#hideImg2").click(function(){
        //     $("#img2 img").fadeToggle();
        //  });
    
        //  $("#hideImg3").click(function(){
        //     $("#img3 img").fadeToggle();
        //  });
    
        //  $("#hideImg4").click(function(){
        //     $("#img4 img").fadeToggle();
        //  });
    
    
    
        //  $("#addMore").click(function(){
        //    $( "#gridContainer" ).append( $( '<img id="img5" src="deskMock.jpg" />' ) );
    
        //     //$("#paragraphs").append( $("#myP").clone());
        // });
    
        // $("#addLess").click(function(){
        //     $( "#img5" ).remove();
        //     //$("#paragraphs").append( $("#myP").clone());
        // });
    
         
    