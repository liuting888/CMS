require('../common/header.js');
require('../common/aside.js');
require('../common/loading.js');
require('../common/common.js');
$.get('/v6/course', function(data) {
    $('#course-list').html(template('course-list-tpl', data.result));
})