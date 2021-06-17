<template>
    <div class="content">
        <h1>cordova</h1>
        <h2 @click="takePhoto">1、拍照</h2>
        <img v-show="showImg" id="myImage" width="80%" />
        <h2 @click="weChatShare">2、微信分享</h2>
        <h2 @click="qqShare">3、QQ分享</h2>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showImg:false
        }
    },
    created(){
    },
    methods: {
        takePhoto(){
            navigator.camera.getPicture(
                function success(imageURI){
                console.log('拍照成功' + imageURI)
                    plugins.crop(function success(fileURL) {
                        console.log("裁剪成功")
                        console.log(fileURL)
                        let image = document.getElementById("myImage")
                        image.src = fileURL
                        this.showImg = true

                    }, function fail(err) {
                        console.log("裁剪失败")
                        console.log(err);
                    }, imageURI, {quality: 80});
                },
                function fail(message){
                    console.log("拍照失败")
                    navigator.notification.alert("操作失败，原因：" + message, null, "警告");
                },
                {
                    //拍照
                    destinationType: Camera.DestinationType.FILE_URI
                    //相册选图
                    //mediaType: Camera.MediaType.PICTURE,
                    //sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
                }
            )
        },
        
        //微信网页分享
        weChatShare(){
        Wechat.share({
            message: {
                title: "标题",
                description: "描述",
                //mediaTagName: "Media Tag Name(optional)",
                //  thumb: "http://YOUR_THUMBNAIL_IMAGE",
                media: {
                    type: 7,   // webpage
                    webpageUrl: "http://mngssb.isu6.com/test.pdf"    // webpage
                }
            },
            scene: 0   // 分享方式0分享给好友、1分享到朋友圈、2收藏
        }, function () {
            alert("Success");
        }, function (reason) {
            alert("Failed: " + reason);
        });
        },

        //qq网页分享
        qqShare(){
            var args = {};
            args.client = QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
            args.scene = QQSDK.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            args.url = 'http://mngssb.isu6.com/test.pdf';
            args.title = '这个是 Cordova QQ 新闻分享的标题';
            args.description = '这个是 Cordova QQ 新闻分享的描述';
            args.image = 'https://cordova.apache.org/static/img/cordova_bot.png';
            QQSDK.shareNews(function () {
                console.log("success")
            }, function (failReason) {
                console.log('fail')
            }, args);
        }
    }
}
</script>