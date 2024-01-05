new Vue({
    el: '#app',
    data: {
        lang: 'vi',
        langs: ['zh', 'vi'],
        code: '',
        reg: '',
        sideCode: 1,
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
        },
        urlList: [
            '5580a.tv',
            '5580c.tv',
            '5580v.tv',
            '5580x.tv',
            'TẢI XUỐNG BẰNG IOS',
            'TẢI ANDROID'

        ],
        serviceCustomerUrl: 'https://chat.ichatlink.net/widget/standalone.html?eid=b23dea97e470ffde786ebd78505ae5e1&agentid=80bc82ba885fa28bf3c32cbb390058e5&language=vi',
    },
    updated() {
       
         
    },
    mounted() {
        this.reg = window.location.href.split("/")[3]
        if (this.reg.includes('?')) {
            this.reg = this.reg.split("?")[0]
        }
        
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
            });
        this.bindSwiper()
    },
    methods: {
        bindSwiper() {
            var mySwiper = new Swiper (document.getElementById("swiper-container"), {
                loop: true,
                autoplay: true,
                speed:3000,
                nextButton: 'null',
                prevButton: 'null',
                slidesPerView : "auto",
                observer:true,
                observeParents:true,

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
            this.addInvitationCodeClip();
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
        // 添加邀请码到剪切板
        addInvitationCodeClip() {
            // 创建一个隐藏的文本输入框元素
            var textarea = document.createElement("textarea");
            // 设置要复制的内容
            textarea.value = this.reg;
            // 将该元素添加到页面上（但不显示）
            document.body.appendChild(textarea);
            // 选中并复制文本
            textarea.select();
            document.execCommand('copy');
            // 移除该元素 
            document.body.removeChild(textarea);
            console.log("已成功复制到剪贴板！");
        },
        onService() {
            window.open(this.serviceUrl)
        },
        goService() {
            window.open(this.serviceCustomerUrl)
        },
        buttonClick(index) {
            if (index < 4) {
                window.open("https://" + this.urlList[index])
            } else if(index == 4) {
                this.downloadApp(this.ios)
            } else {
                this.downloadApp(this.android)
            }
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