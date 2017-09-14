require('../common/loading.js');
require('../common/common.js');
require('../common/header.js');
require('../common/aside.js');
$('#repass-form').on('submit', function() {
    if ($('#input-pass').val() !== $('#input-pass-repeat').val()) {
        alert('两次密码输入不一致');
        return false;
    };
    $('#repass-form').ajaxSubmit({
        success: function(data) {
            console.log(data);
        }
    });
    return false;
});