//author:caibaojian
//website:http://caibaojian.com
//weibo:http:weibo.com/kujian
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
!function(e, t) {
    function n() {
        var n = l.getBoundingClientRect().width;
        t = t || 540,
        n > t && (n = t);
        var i = 100 * n / e;
        r.innerHTML = "html{font-size:" + i + "px!important;}"
    }
    var i, d = document, o = window, l = d.documentElement, r = document.createElement("style");
    if (l.firstElementChild)
        l.firstElementChild.appendChild(r);
    else {
        var a = d.createElement("div");
        a.appendChild(r),
            d.write(a.innerHTML),
            a = null
    }
    n(),
        o.addEventListener("resize", function() {
            clearTimeout(i),
                i = setTimeout(n, 300)
        }, !1),
        o.addEventListener("pageshow", function(e) {
            e.persisted && (clearTimeout(i),
                i = setTimeout(n, 300))
        }, !1),
        "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function(e) {
            d.body.style.fontSize = "16px"
        }, !1)
}(1080, 1080);