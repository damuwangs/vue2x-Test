//cordova初始化方法
let init = function () {
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener(
      "jpush.receiveRegistrationId",
      function (event) {
        console.log("注册成功>>>");
        console.log(event.registrationId);
        console.log("注册成功<<<");
      },
      false
    );
    document.addEventListener(
      "jpush.openNotification",
      function (event) {
        console.log("点击通知跳转");
        console.log(event.extras);
      },
      false
    );
    initJPush();
  }
};

//高德获取位置信息
let GPS = function (callback) {
  GaoDe.getCurrentPosition(
    function (json) {
      callback(json);
    },
    function (json) {
      console.log(json);
    }
  );
};

//极光推送
function initJPush() {
  if ("JPush" in window) {
    console.log("initialize JPush...");
    try {
      window.JPush.init();
      window.JPush.setDebugMode(true);
      window.setTimeout(() => {
        window.JPush.getRegistrationID((data) => {
          console.log(data);
          console.log("JPush initialize successful...");
        });
      }, 1000);
      if (device.platform != "Android") {
        window.JPush.setApplicationIconBadgeNumber(0);
      }
    } catch (exception) {
      console.log(exception);
    }
  } else {
    console.error("JPush is not exist...");
  }
}

//拍照裁剪
let takePhoto = function (callback, type) {
  let params = {
    //拍照
    destinationType: Camera.DestinationType.FILE_URI
  };
  if (type) {
    params = {
      //相册选图
      mediaType: Camera.MediaType.PICTURE,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
    };
  }
  console.log(type);
  console.log(params);
  navigator.camera.getPicture(
    function success(imageURI) {
      console.log("拍照成功" + imageURI);
      plugins.crop(
        function success(fileURL) {
          console.log("裁剪成功");
          console.log(fileURL);
          callback(fileURL);
        },
        function fail(err) {
          console.log("裁剪失败");
          console.log(err);
        },
        imageURI,
        { quality: 80 }
      );
    },
    function fail(message) {
      console.log("拍照失败=" + message);
    },
    params
  );
};

export default {
  init: init,
  takePhoto: takePhoto
};
