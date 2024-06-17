// Except frequent search of right JavaScript methods and CSS

const container = document.querySelector("container");

let input = 16;

let grid = input * input;

for (let i = 0; i < grid; i++) {
    if (i < grid) {
        let a = document.createElement("div");
        a.style.flex = "1 6%";
        container.appendChild(a)
    }
}

// Not the right flex grid wrap, define a math method to get flex ratio for wrap
// you will have the right code when any input will create an even grid
