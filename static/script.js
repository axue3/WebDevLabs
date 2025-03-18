var x = 5;
var y = 7;
let z = x + y;
console.log(z);
var strA = "Hello ";
var strB = "world!";
var strC = strA + strB;
console.log(strC);


function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
}


SumNPrint(x,y);
SumNPrint(strA,strB);

let C = "bananas";
z = 6;
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") { 
//             alert("Found the Banana at index " + i);
//             return;
//         }
//     }
//     alert("Didn't find Banana");
// }

// findTheBanana(L1);
// findTheBanana(L2);




// function findTheBananaForEach(array) {
//     array.forEach(function(currentValue, index, arr) {
//         if (currentValue === "Banana") {
//             alert("We found a banana in the first array");
//         }
//     });
// }

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting = "";

    if (h < 12) {
        greeting ="Good morning";
    } else if (h >= 12 && h < 18) {
        greeting ="Good afternoon";
    } else if (h >= 18 && h < 20) {
        greeting ="Good evening";
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)) {
        greeting ="Good night";
    }
    let E = document.getElementById("greeting");
    E.innerHTML = greeting;
}


greetingFunc();

function addYear(){
    let d = new Date();
    let y = d.getFullYear();
    let Y = document.getElementById("copyYear");
    Y.innerHTML = `© ${y} Andrew Xue. All rights reserved.`;
}

function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("showButton").style.display = "none";
}

$(document).ready(function() {
    $("#readMoreBtn").click(function() {
      $("#fullBio").show();
      $("#readMoreBtn").hide();
      $("#readLessBtn").show();
    });
  
    $("#readLessBtn").click(function() {
      $("#fullBio").hide();
      $("#readMoreBtn").show();
      $("#readLessBtn").hide();
    });
  });


function validateForm(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");
    const errorContainer = document.getElementById("errorMessages");


    errorContainer.innerHTML = "";

    let errors = [];

    if (!nameInput.checkValidity()) {
        errors.push("Please enter your name.");
    }


    if (!emailInput.checkValidity()) {
        errors.push("Please enter a valid email address.");
    }


    if (!commentInput.checkValidity()) {
        errors.push("Please enter your comment.");
    }


    if (errors.length > 0) {
        errorContainer.innerHTML = errors.join("<br>")
    }else {
        document.getElementById("contactForm").submit();
    }
}
