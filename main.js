let input = document.querySelector("#typeInp");
let btn = document.querySelector("button");
let list = document.querySelector(".list");

let day = document.querySelector(".day");
let date = new Date();
let thisDay = date.getDate();
let thisMonth = date.getMonth();
let year = date.getFullYear();

day.textContent = thisDay + "." + (thisMonth + 1) + "." + year ;

let time = document.querySelector(".time");
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

time.textContent = hours + ":" + minutes;
if (minutes < 10) {
    time.textContent = hours + ":" + "0" + minutes;
}

btn.addEventListener("click", handler);

function handler() {
    if (input.value) {
        let newTask = new Task(input.value);
        newTask.createTask(list);
        input.value = ""
    }
}
class Task {
    constructor(name) {
        this.name = name;
        this.done = false;
    }

    createTask(e) {
        this.div = document.createElement("div");
        this.div.classList.add("block");

        this.p = document.createElement("p");
        this.p.innerText = this.name;

        this.rightDiv = document.createElement("div");
        this.rightDiv.classList.add("rightSide");

        this.radioInp = document.createElement("input");
        this.radioInp.type = "checkbox";
        this.radioInp.classList.add("radio");
        this.radioInp.addEventListener("click", function () {
            if (this.radioInp = this.checked) {
                this.parentNode.parentNode.classList.toggle("done");
                this.done = true;
            }
            else (this.parentNode.parentNode.classList.remove("done"))
        }
        );

        this.delBtn = document.createElement("div");
        this.delBtn.classList.add("delbtn");
        this.delBtn.addEventListener("click", function () {
            this.parentNode.parentNode.remove();
        })

        this.img = document.createElement("img");
        this.img.src = "img/trash.png";

        e.append(this.div);
        this.div.append(this.p);
        this.div.append(this.rightDiv);
        this.rightDiv.append(this.radioInp);
        this.rightDiv.append(this.delBtn);
        this.delBtn.append(this.img);
    }
};