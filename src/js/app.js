const sayHelloTo = require('./hello.js');

const span = document.createElement('span');
span.innerText = sayHelloTo('Javascript Developer');

document.body.appendChild(span);
