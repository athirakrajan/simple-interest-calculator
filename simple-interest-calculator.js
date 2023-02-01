function haii() {
    let t = document.getElementsByClassName("t")[0].value;
    console.log(t)
    let r = document.getElementsByClassName("t")[0].value;
    let p = document.getElementsByClassName("p")[0].value;
    let a = p * r * r / 100;
    console.log(p * r * t / 100)
    alert(a)
}
document.getElementById("btn").addEventListener("click", haii)
