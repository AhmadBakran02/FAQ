
let b = document.querySelectorAll(".btn");
let add = "./img/icon-plus.svg";
let remove = "./img/icon-minus.svg";

let arr = ["one", "two", "three", "four"];

for (let i = 0 ; i < b.length ; i ++) {
    b[i].onclick = function click() {
        let tmp = b[i].getAttribute("src");
        let id = b[i].className;

        if (tmp === add) {
            
            arr.forEach(e => {
                if (id.search(e) != -1) {
                    let t = document.getElementsByClassName(e);
                    t[1].style.display = "block";
                }
            });
            
            b[i].setAttribute("src", remove);
        }
        else {
            arr.forEach(e => {
                if (id.search(e) != -1) {
                    let t = document.getElementsByClassName(e);
                    t[1].style.display = "none";
                }
            });

            b[i].setAttribute("src", add);
        }
    }
}
