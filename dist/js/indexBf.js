new Vue({
    el: '#app',
    data: {
        lang: 'vi',
        langs: ['zh', 'vi'],
        code: '',
        reg: '',
        sideCode: 1,
        apiUrl: 'https://api.live8.shop',
        downloadList: [],
        ios: null,
        android: null,
        h5: null,
        serviceUrl: null,
        newDate: null,
        udid: null,
        domain: null,
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
    mounted() {
        this.reg = window.location.href.split("/")
        if (this.reg.includes('?')) {
            this.reg = this.reg.split("?")[0]
        }
        this.domain = window.location.protocol + "//" + window.location.host;

        // if (this.reg && this.reg.length >= 7) {
        //     this.lang = this.langs[this.reg.slice(0, -6)] || 'zh';
        // } else {
        //     this.lang = getCurrentLanguage()[0]
        // }
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
        //var button = document.getElementsByName("downloadButton");
    },
    methods: {

        openInstallApk() {
            var data = OpenInstall.parseUrlParams();///openinstall.js中提供的api，解析当前网页url中的查询参数并对data进行赋值
            new OpenInstall({//初始化方法，与openinstall服务器交互，应尽早调用
                appKey : "mslhmh",//appKey为openinstall为应用分配的唯一id（必须传入）
                onready : function() {//初始化成功回调方法。当初始化完成后，会自动进入
                    this.schemeWakeup();//尝试使用scheme打开App（主要用于Android以及iOS的QQ环境中）
                    var m = this, button = document.getElementByName("downloadButton");//为button对象绑定对应id的元素
                    button.onclick = function() {//对应button的点击事件
                        m.wakeupOrInstall();//此方法为scheme、Universal Link唤醒以及引导下载的作用（必须调用且不可额外自行跳转下载）
                        return false;
                    }
                }
            }, data);//初始化时传入data，作为一键拉起/App传参安装时候的参数
        },

        getDownloadList() {
            let os = judgeClient() === 'IOS' ? 2 : 1
            axios.post(this.apiUrl + `/promotion/app/user/landingpage/list`, { 'os': os, 'invitationCode': this.reg, 'url': this.domain }, {
                headers: {
                    'Content-type': 'application/json',
                    'X-UDID': this.udid,
                    'X-Timestamp': this.newDate,
                    'X-Sign': $.md5(this.udid + 'jgyh,kasd' + this.newDate),
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
                this.serviceUrl = response.data.filter(item => item.position === 5)[0]?.urlDown
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
            const url  = `&url=${this.domain}`
            axios.get(item.urlDown + this.reg + url, {
                headers: {
                    'Content-type': 'application/json',
                    'X-UDID': this.udid,
                    'X-Timestamp': this.newDate,
                    'X-Sign': $.md5(this.udid + 'jgyh,kasd' + this.newDate),
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