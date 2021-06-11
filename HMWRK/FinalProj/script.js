        let subscribeRequest = function () {
            prompt("Subscribe to Newsletter Now to recieve Updates on Exclusive Merch and Discounts", "What's your email?");
        }

        window.addEventListener("load", function () {
            setTimeout(subscribeRequest, 4000);
            setInterval(imgChange, 3000);
        })

        window.setInterval(timerFunction, 4000);

    