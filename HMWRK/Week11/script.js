
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
                galleryImg.src = "MelaninPoppin.jpg";
                imageCounter = 3;
            }
            else if (imageCounter == 3) {
                galleryImg.src = "GirlPower.jpg";
                imageCounter = 1;
            }

        }

        let subscribeRequest = function () {
            prompt("Subscribe to Newsletter to keep up with Savage Learning Environment", "What's your email?");
        }

        window.addEventListener("load", function () {
            setTimeout(subscribeRequest, 4000);
            setInterval(imgChange, 3000);
        })

        window.setInterval(timerFunction, 4000);

    