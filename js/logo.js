//登录状态
let login = document.querySelector(".login").querySelector("a");
/*获取登录的用户名*/
//获取用户输入并去掉第一个字符截取
let inputS = location.search.substring(1);
//将用户输入数据转化为数组，通过=号划分
let inputArr = inputS.split("=");
//判断用户是否登录
if (inputS == "") {
    document.querySelector(".user").innerHTML = "请登录";
} else {
    document.querySelector(".user").innerHTML = inputArr[1] + " " + "欢迎您";
    document.querySelector(".user").style.color = "red"
    login.href = "#";
}