'use strict';


Router.route('/', {
    layoutTemplate:'Test',
    action: function() {
        this.render();
        this.next();
    },
    onBeforeAction: function() {
        document.title = "测试页面";
        this.next();
    }
});