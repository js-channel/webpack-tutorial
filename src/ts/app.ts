import './../styles/index'
import { sayHelloTo } from './hello'

let module: any;
const hot = module.hot;

const span = document.createElement('span');
span.innerText = sayHelloTo('Javascript Developer');

document.body.appendChild(span);

if (hot) {
    hot.accept();
    hot.dispose(() => span.parentNode.removeChild(span));
}
