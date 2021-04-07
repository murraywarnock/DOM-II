// Your code goes here
const navLink = document.querySelectorAll(".nav-link");
const fbImg = document.querySelector(".intro img");

fbImg.addEventListener("mouseover", function (event) {
    fbImg.style.border = "5px solid red";
});
fbImg.addEventListener("mouseleave", function (event) {
    fbImg.style.border = "";
});

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "f") {
      alert("You hit the 'f' key!");
    }
  });

window.addEventListener("load", function (event) {
    alert("Fun Bus is Departing");
});

// navLinkArray = Array.from(navLink);
// for (i = 0; i < navLinkArray; i++) {
//     console.log(`navLinkArray[${i}]`);
//     navLinkArray[i].addEventListener('mouseover', function(event) {
//         navLinkArray[i].style.color = "red";
//         console.log(`mouseover navLinkArray[${i}]`);
//     })
// }
navLink[0].addEventListener('mouseover', function(event) {
    navLink[0].style.color = "red";
 });
 navLink[0].addEventListener('mouseleave', function(event) {
    navLink[0].style.color = "black";
 });

// cancelButton.addEventListener("click", function (event) {
//     modal.classList.add("off");
//     failureMessage.classList.remove("off");
//   });
  