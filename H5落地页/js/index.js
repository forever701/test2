(function flexible(window, document) {
    function resetFontSize() {
        const size = (document.documentElement.clientWidth / 750) * 100;
        document.documentElement.style.fontSize = size + "px";
    }
    window.addEventListener("pageshow", resetFontSize);
    window.addEventListener("resize", resetFontSize);
})(window, document);

 const judgeClient = function () {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //判断是否是 android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //判断是否是 iOS终端
    if (isAndroid && window.Android) {
      return 'Android'
    } else if (isIOS && window.webkit) {
      return 'IOS'
    } 
}