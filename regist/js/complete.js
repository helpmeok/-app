function size() {
    var html = document.querySelector('html');
    html.style.fontSize = document.body.clientWidth / 7.5 + 'px';
}
size();
window.onresize = size;
setTimeout(function () {
    document.querySelector("body").style.visibility = "visible"
    document.querySelector("html").style.visibility = "visible"
}, 100);