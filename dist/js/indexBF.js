new Vue({
    el: '#app',
    data: {
        lang: 'vi',
        langs: ['zh', 'vi'],
        code: '',
        reg: '',
        sideCode: 1,
        // 是否是移动端，默认为true
        isMobile: true,
        // 浏览器高度
        screenHeight: 0,
        apiUrl: 'https://api.c4prfy.com',
        downloadList: [],
        ios: null,
        android: null,
        h5: null,
        serviceUrl: null,
        newDate: null,
        udid: null,
        os: null,
        allData: {
            'zh': {
                'appName': '草莓直播',
                'hots': [
                    { 'name': '公平公正', 'title': '官方保证，呈现可靠' },
                    { 'name': '资金保障', 'title': '加密机制，安全保障' },
                    { 'name': '用心服务', 'title': '24/7全天候服务，随时恭候您' }
                ],
                'title1': '网址',
                'title2': '打开',
                'title3': '由于行业原因，本APP被某杀毒软件认定为病毒，请大家放心使用，安装APP不会对您的手机有安全隐患。'

            },
            'vi': {
                'appName': 'Dâu Tây',
                'hots': [
                    { 'name': 'công bằng và chính đáng', 'title': 'Bảo đảm chính thức, trình bày đáng tin cậy' },
                    { 'name': 'Bảo lãnh quỹ', 'title': 'Cơ chế mã hóa, đảm bảo an ninh' },
                    { 'name': 'Phục vụ bằng trái tim', 'title': 'Phục vụ 24/7, chờ đợi bạn bất cứ lúc nào' }
                ],
                'title1': 'URL',
                'title2': 'Mở',
                'title3': 'Vì lý do ngành, APP này đã được phần mềm chống vi-rút xác định là vi-rút. Vui lòng sử dụng nó. Việc cài đặt Ứng dụng sẽ không gây ra bất kỳ rủi ro bảo mật nào cho điện thoại di động của bạn.'
            },
        }
    },
    updated() {
        this.bindQRCode()
    },
    mounted() {
        this.screenHeight = document.body.clientHeight 
        this.reg = window.location.href.split("/")
        if (this.reg.includes('?')) {
            this.reg = this.reg.split("?")[0]
        }
        
        // if (this.reg && this.reg.length >= 7) {
        //     this.lang = this.langs[this.reg.slice(0, -6)] || 'zh';
        // } else {
        //     this.lang = getCurrentLanguage()[0]
        // }
        // 判断当前访问设备是PC还是移动端，有两种方法
        // 1. 使用User-Agent字符串
        this.isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
        // 2. 使用媒体查询 使用CSS的媒体查询来检测屏幕大小，从而判断用户是在PC端还是移动端访问。媒体查询是CSS中的一种语法，可以根据屏幕大小、屏幕比例、设备方向等条件来选择应用不同的样式。
        // this.isMobile = window.matchMedia('(max-width: 768px)').matches;
        this.sideCode = this.lang === 'zh' ? 0 : 1;
        this.newDate = +new Date()
        document.title = this.allData[this.lang].appName
        this.handleIcoCreate(`./img/logo-icon-${this.lang}.png`);
        const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
            .then(FingerprintJS => FingerprintJS.load())
        fpPromise
            .then(fp => fp.get())
            .then(result => {
                this.udid = result.visitorId.toUpperCase()
                this.getDownloadList();
                console.log(this.udid)
            })
    },
    methods: {
        //生成绑定二维码
        bindQRCode() {
            var qrcode = new QRCode(document.getElementById("qrCodeDiv"), {
                text: window.location.href,
                width: 220,
                height: 220,
                colorDark: '#333333',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.L
            });
        },
        getDownloadList() {
            axios.post(this.apiUrl + `/promotion/app/user/landingpage/list`, { os: judgeClient() === 'IOS' ? 2 : 1, invitationCode: this.reg }, {
                headers: {
                    'Content-type': 'application/json',
                    'X-UDID': this.udid,
                    'X-Timestamp': this.newDate,
                    'X-Sign': $.md5(this.udid + '6fff,3344322' + this.newDate),
                    'side_code': 1
                }
            }).then((res) => {
                const response = res.data
                if (response.secret) {
                    response.data = decrypt(response.data)
                }
                this.ios = response.data.filter(item => item.position === 4)[0]
                this.android = response.data.filter(item => item.position === 1)[0]
                this.h5 = response.data.filter(item => item.position === 2)[0]
                this.serviceUrl = response.data.filter(item => item.position === 5)[0].urlDown
                this.downloadList = response.data.filter(item => item.position === 3)
            })
        },
        onDownloadApp() {
            if (judgeClient() === 'IOS') {
                this.downloadApp(this.ios)
            } else {
                this.downloadApp(this.android)
            }
        },
        downloadApp(item) {
            axios.get(item.urlDown + this.reg, {
                headers: {
                    'Content-type': 'application/json',
                    'X-UDID': this.udid,
                    'X-Timestamp': this.newDate,
                    'X-Sign': $.md5(this.udid + '6fff,3344322' + this.newDate),
                    'side_code': 1
                }
            }).then(res => {
                let response = res.data;
                if (response.secret) {
                    response.data = decrypt(response.data)
                }
                if (response.data) {
                    location.href = response.data;
                }
            })
        },
        onService() {
            window.open(this.serviceUrl)
        },
        handleIcoCreate(icoUrl) {
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = icoUrl
            document.getElementsByTagName('head')[0].appendChild(link);
        },
    }
});