

(function flexible(window, document) {
    function resetFontSize() {
        const size = (document.documentElement.clientWidth / 750) * 100;
        document.documentElement.style.fontSize = size + "px";
    }
    window.addEventListener("pageshow", resetFontSize);
    window.addEventListener("resize", resetFontSize);
})(window, document);

function judgeClient() {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //判断是否是 android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //判断是否是 iOS终端
    if (isAndroid) {
        return 'Android'
    } else if (isIOS) {
        return 'IOS'
    }
}


// 解密
const key = CryptoJS.enc.Utf8.parse('6633e83adhf992rd')
const iv = CryptoJS.enc.Utf8.parse('6633e83adhf992rd')

// aes解密
function decrypt(word) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        // mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.Pkcs7,
    })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedStr.toString())
}

function downFile(url) {
    const el = document.createElement('a');
    el.href = url;
    el.setAttribute('download', '可选，下载文件的名字');
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}

function copyText(str) {
    let newInput = document.createElement("input");
    newInput.value = str;
    document.body.appendChild(newInput);
    newInput.select();
    document.execCommand("Copy");
    newInput.remove();
}
