require('../common/loading.js');
require('../common/common.js');
require('../common/header.js');
require('../common/aside.js');
$.ajax({
    url: '/v6/teacher/profile',
    type: 'get',
    success: function(data) {
        if (data.code == 200) {
            $('.teacher-profile').html(template('teacher-profile-tpl', data.result));
            initPlugin();
        }
    }
});

$('#teacher-profile-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
        }
    }
});

// 安装插件
function initPlugin() {
    $('input[name=tc_birthday]').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date('2020-01-01')
    });
    $('input[name=tc_join_date]').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        endDate: new Date('2020-01-01')
    });
};