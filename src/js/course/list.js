
require('../common/header.js');
require('../common/aside.js');

$.get('/v6/course',function(data){
    $('#course-list').html(template('course-list-tpl',data.result));
})