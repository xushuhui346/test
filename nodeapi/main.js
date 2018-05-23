//调用hello模块
var Hello = require('./hello');

var hello = new Hello();
hello.setName('Yideng');
hello.sayHello();