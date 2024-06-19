// Except frequent search of right JavaScript methods and CSS

const container = document.querySelector("container");


const button = document.querySelector("button");


function createGrid() {
    let container = document.querySelector("container");

    container.replaceChildren();

    let input = Number(prompt("Enter grid size", ""));

    let grid = input * input;

    let i = 0

if (input > 100) {
    let input = 0;
}

for (let i = 0; i < grid; i++) {
    if (input > 100) {
        return;
    }
    else if (i < (grid)) {
        let a = document.createElement("div");
        a.style.width = 'calc(100% / ' + input + ')'
        a.style.height = 'calc(100% ' + input + ')'
        container.appendChild(a)
    }
}

    const hover = document.querySelectorAll("div");

    hover.forEach(() => {
    addEventListener("mouseover", (e) => {
        if (e.target && e.target.nodeName == "DIV") {
            e.target.style.background = "blue";
            }
    })
})

}

