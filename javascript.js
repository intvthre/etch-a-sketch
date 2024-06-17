// Except frequent search of right JavaScript methods and CSS

const container = document.querySelector("container");
container.style.display = "flex";
container.style.flexWrap = "wrap;"

const row1 = document.createElement("div");
const row2 = document.createElement("div");
const row3 = document.createElement("div");
const row4 = document.createElement("div");
const row5 = document.createElement("div");
const row6 = document.createElement("div");
const row7 = document.createElement("div");
const row8 = document.createElement("div");
const row9 = document.createElement("div");
const row10 = document.createElement("div");
const row11 = document.createElement("div");
const row12 = document.createElement("div");
const row13 = document.createElement("div");
const row14 = document.createElement("div");
const row15 = document.createElement("div");
const row16 = document.createElement("div");

row1.classList.add("row");
row2.classList.add("row");
row3.classList.add("row");
row4.classList.add("row");
row5.classList.add("row");
row6.classList.add("row");
row7.classList.add("row");
row8.classList.add("row");
row9.classList.add("row");
row10.classList.add("row");
row11.classList.add("row");
row12.classList.add("row");
row13.classList.add("row");
row14.classList.add("row");
row15.classList.add("row");
row16.classList.add("row");


for (let i = 0; i < 256; i++) {
    if (i < 16) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row1.appendChild(a)
    }
    else if (i < 32) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row2.appendChild(a);
    }
    else if (i < 48) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row3.appendChild(a);
    }
    else if (i < 64) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row4.appendChild(a);
    }
    else if (i < 80) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row5.appendChild(a);
    }
    else if (i < 96) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row6.appendChild(a);
    }
    else if (i < 112) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row7.appendChild(a);
    }
    else if (i < 128) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row8.appendChild(a);
    }
    else if (i < 144) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row9.appendChild(a);
    }
    else if (i < 160) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row10.appendChild(a);
    }
    else if (i < 176) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row11.appendChild(a);
    }
    else if (i < 192) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row12.appendChild(a);
    }
    else if (i < 208) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row13.appendChild(a);
    }
    else if (i < 224) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row14.appendChild(a);
    }
    else if (i < 240) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row15.appendChild(a);
    }
    else if (i < 256) {
        let a = document.createElement("div");
        a.classList.add("div-grid");
        row16.appendChild(a);
    }
}

container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
container.appendChild(row4);
container.appendChild(row5);
container.appendChild(row6);
container.appendChild(row7);
container.appendChild(row8);
container.appendChild(row9);
container.appendChild(row10);
container.appendChild(row11);
container.appendChild(row12);
container.appendChild(row13);
container.appendChild(row14);
container.appendChild(row15);
container.appendChild(row16);






// class for rows to avoid div styling
// flexbox for rows and divs to fill entire screen on zoom in and out
// remove rows if possible to create grid with flexbox only


