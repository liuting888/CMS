require('../common/header.js');
require('../common/aside.js');


$('#teacher-add-form').ajaxForm(function(data) {
    if (data.code == 200) {
        alert('恭喜你，添加讲师成功');
    }
});