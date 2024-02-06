
let displayNumber = function(number, callback) {                                 //anonyomus function to display number in the screen
    let div = document.createElement('div');                                     //creating div element
    div.textContent = number;                                                    //adding text content                                                
    document.body.appendChild(div);                                              //appendChild to the body of HTML 
    div.style.display = "block";                                                 //adding style to div
    div.style.fontSize = "50px";                                                 //adding fontsize to div
    setTimeout(() => {                                                           //adding setTimeout method
        div.style.display = "none";                                              //changeing the diaplay to none to hide the content
        callback();                                                              
    }, 2000);
}

 let displayImage = function (callback) {                                         // function for displaying image in the browser
    let img = document.createElement('img');                                      // creating a image tag
    document.body.appendChild(img);                                               //  adding the created image in body.
    img.setAttribute('src', 'https://as2.ftcdn.net/v2/jpg/04/45/84/25/1000_F_445842532_P1Jxkuix9e29M5QaRZXSGuGI47zi4wOX.jpg');
    img.setAttribute('alt','Happy Independence Day');                             // Additional information about the image
    setTimeout(() => {                                                            //adding setTimeout method inside the function
        img.style.display = "block";                                              //  adding display property in the image tag
        callback();                                                               
    }, 2000);
}

// Callback hell
displayNumber(10, () => {
    displayNumber(9, () => {
        displayNumber(8, () => {
            displayNumber(7, () => {
                displayNumber(6, () => {
                    displayNumber(5, () => {
                        displayNumber(4, () => {
                            displayNumber(3, () => {
                                displayNumber(2, () => {
                                    displayNumber(1, () => {
                                        displayImage(() => {
                                            console.log("All displays completed.");
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});