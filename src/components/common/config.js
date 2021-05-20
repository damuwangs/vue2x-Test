let mServerRootPath = "";
let mRestfulApiPath = "";


export default {
    //获得API服务器路径
    getApiServerPath: function () {
        return mServerRootPath + "/" + mRestfulApiPath;
    }
}
