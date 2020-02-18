function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++)
            c[b] = a[b];
        return c;
    }
    return Array.from(a);
}
var playing = !0, timer = function () {
    return setInterval(function () {
        var a = document.getElementById("counter"), b = parseInt(a.innerText);
        a.innerText = b + 1;
    }, 1e3);
}, interval = timer(), minus = document.getElementById("minus"), plus = document.getElementById("plus"), heart = document.getElementById("heart"), pause = document.getElementById("pause"), commentForm = document.getEl;
