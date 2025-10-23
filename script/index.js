const surprise = document.getElementById("nyala");
const main = document.querySelector(".main-article");
const body = document.querySelector("body");
const head = document.getElementById("head");
const bungkus = document.getElementById("ab");

surprise.addEventListener("click", ()=> {
    head.classList.toggle("aktif");
    main.classList.toggle("aktif");
    bungkus.classList.toggle("aktif");
    surprise.classList.toggle("aktif");
    body.classList.toggle("aktif");
})