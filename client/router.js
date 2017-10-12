'use strict';


Router.route('/', {
    layoutTemplate:'Login',
    action: function() {
        this.render();
        this.next();
    },
    onBeforeAction: function() {
        document.title = "登录页面";
        this.next();
    }
});

Router.route('/admin', {
    layoutTemplate:'Admin',
    action: function() {
        this.render();
        this.next();
    },
    onBeforeAction: function() {
        document.title = "管理页面";
        this.next();
    }
});

Router.route('/test', {
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