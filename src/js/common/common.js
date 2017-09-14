NProgress.start();
window.onload = function() {
    NProgress.done();
};

var isLogin = !!$.cookie('PHPSESSID');
var isLoginPage = location.pathname == '/dist/html/user/login.html';
if (isLoginPage && isLogin) {
    location.href = '/dist';
}
// 如果用户在其他页面时，未登陆过，那么给它自动转到登陆页
else if (!isLoginPage && !isLogin) {
    location.href = '/dist/html/user/login.html';
};