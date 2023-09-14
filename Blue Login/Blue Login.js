document.getElementById("btnup").onclick = function () {
    document.getElementById("circle").style.cssText = `
        animation-name: identifier;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;`

    document.getElementById("signup").style.visibility = "visible";
    document.getElementById("signin").style.visibility = "hidden";

}
document.getElementById("btnin").onclick = function () {
    document.getElementById("circle").style.cssText = `
        animation-name: identifier2;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;`

    document.getElementById("signin").style.visibility = "visible";
    document.getElementById("signup").style.visibility = "hidden";

    document.getElementById("txtname1").value = document.getElementById("txtname2").value;
    document.getElementById("txtpass1").value = document.getElementById("txtpass2").value;


}