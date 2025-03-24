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