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

for (let i = 0; i < 256; i++) {
    if (i < 16) {
        let a = document.createElement("div");
        row1.appendChild(a)
    }
    else if (i < 32) {
        let b = document.createElement("div")
        row2.appendChild(b);
    }
    else if (i < 48) {
        let b = document.createElement("div")
        row3.appendChild(b);
    }
    else if (i < 64) {
        let b = document.createElement("div")
        row4.appendChild(b);
    }
    else if (i < 80) {
        let b = document.createElement("div")
        row5.appendChild(b);
    }
    else if (i < 96) {
        let b = document.createElement("div")
        row6.appendChild(b);
    }
    else if (i < 112) {
        let b = document.createElement("div")
        row7.appendChild(b);
    }
    else if (i < 128) {
        let b = document.createElement("div")
        row8.appendChild(b);
    }
    else if (i < 144) {
        let b = document.createElement("div")
        row9.appendChild(b);
    }
    else if (i < 160) {
        let b = document.createElement("div")
        row10.appendChild(b);
    }
    else if (i < 176) {
        let b = document.createElement("div")
        row11.appendChild(b);
    }
    else if (i < 192) {
        let b = document.createElement("div")
        row12.appendChild(b);
    }
    else if (i < 208) {
        let b = document.createElement("div")
        row13.appendChild(b);
    }
    else if (i < 224) {
        let b = document.createElement("div")
        row14.appendChild(b);
    }
    else if (i < 240) {
        let b = document.createElement("div")
        row15.appendChild(b);
    }
    else if (i < 256) {
        let b = document.createElement("div")
        row16.appendChild(b);
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






/* const row1 = document.createElement("div");

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const div10 = document.createElement("div");
const div11 = document.createElement("div");
const div12 = document.createElement("div");
const div13 = document.createElement("div");
const div14 = document.createElement("div");
const div15 = document.createElement("div");
const div16 = document.createElement("div");

container.appendChild(row1);

row1.appendChild(div1);
row1.appendChild(div2);
row1.appendChild(div3);
row1.appendChild(div4);
row1.appendChild(div5);
row1.appendChild(div6);
row1.appendChild(div7);
row1.appendChild(div8);
row1.appendChild(div9);
row1.appendChild(div10);
row1.appendChild(div11);
row1.appendChild(div12);
row1.appendChild(div13);
row1.appendChild(div14);
row1.appendChild(div15);
row1.appendChild(div16); */


// Recall landing-page and see 16x16 div grid in the same way. 
// one more div for every 16 divs, two levels of append


/* window.onload=function()
    {
        let i=0;
        let j=0;

        for (i=1; i<=16; i++)
        {
            for (j=1; j<=16; j++)
            {
                if ((i%2!=0 && j%2==0)||(i%2==0 && j%2!=0))
                {
                    let d=document.createElement("div");
                    document.body.appendChild(d);
                    d.className="black";
                }
                else
                {
                    let d=document.createElement("div");
                    document.body.appendChild(d);
                    d.className="white";
                }
            }
        }
    } */