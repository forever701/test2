//AppSharePro初始化时将与appsharepro服务器交互，应尽可能早的调用
/*web页面向app传递的json数据(json string/js Object)，应用被拉起或是首次安装时，通过相应的android/ios api可以获取此数据*/
var data = AppSharePro.parseUrlParams();///web/appsharepro.js中提供的工具函数，解析url中的所有查询参数
new AppSharePro({
    /*appKey必选参数，平台为每个应用分配的ID*/
    appKey : "czqpj52h",
    /*直接指定渠道编号，默认通过当前页url中的channelCode参数自动检测渠道编号*/
    //channelCode:"渠道编号",
    /*自定义遮罩的html*/
    //mask:function(){
    //  return "<div id='_shadow' style='position:fixed;left:0;top:0;background:rgba(0,255,0,0.5);filter:alpha(opacity=50);width:100%;height:100%;z-index:10000;'></div>"
    //},
    /*初始化完成的回调函数，可选*/
    onready : function() {
        /*在app已安装的情况尝试拉起app*/
        //this.schemeWakeup({data:data,channelCode:"test-channelcode"});//延迟指定绑定参数与渠道编号
        this.schemeWakeup();

        /*用户点击某个按钮时(假定按钮id为downloadButton)，安装app*/
        var m = this, buttons = document.querySelectorAll(".down");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                //this.wakeupOrInstall({data:data,channelCode:"test-channelcode"});//延迟指定绑定参数与渠道编号
                m.wakeupOrInstall()
                /*跳过scheme拉起，直接安装*/
                //m.install({data:data,channelCode:"test-channelcode"});//延迟指定绑定参数与渠道编号
                return false
            }
        }
        // var m = this, button = document.getElementById("downloadButton");
        // button.onclick = function() {
        //     //this.wakeupOrInstall({data:data,channelCode:"test-channelcode"});//延迟指定绑定参数与渠道编号
        //     m.wakeupOrInstall();
        //     /*跳过scheme拉起，直接安装*/
        //     //m.install({data:data,channelCode:"test-channelcode"});//延迟指定绑定参数与渠道编号
        //     return false;
        // }
    }
}, data);